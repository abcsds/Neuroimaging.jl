using DSP


@doc doc"""
High pass filter

Simply a wrapper for the DSP.jl functions

### Input

* signals: Signal data in the format samples x channels
* cutOff: Cut off frequency in Hz
* fs: Sampling rate
* order: Filter orde

### Output

* filtered signal
* filter used on signal
""" ->
function highpass_filter{T <: FloatingPoint}(signals::Array{T}, cutOff::Number, fs::Number, order::Int)

    debug("Highpass filtering $(size(signals)[end]) channels.  Pass band > $(cutOff) Hz")

    Wn = cutOff/(fs/2)

    highpass_filter(signals, Wn, order)
end


function highpass_filter{T <: FloatingPoint}(signals::Array{T}, Wn::Number, order::Int)

    debug("Filter order = $order, Wn = $Wn")

    f = digitalfilter(Highpass(Wn), Butterworth(order))

    signals = filtfilt(f, signals)

    return signals, f
end


#######################################
#
# Low pass filter
#
#######################################

function lowpass_filter(signals::Array; cutOff::Number=2,
                         order::Int=3, fs::Number=8192)

    signals = convert(Array{Float64}, signals)

    Wn = cutOff/(fs/2)
    f = digitalfilter(Lowpass(Wn), Butterworth(order))

    info("Lowpass filtering $(size(signals)[end]) channels.  Pass band < $(cutOff) Hz")
    debug("Filter order = $order, fs = $fs, Wn = $Wn")

    signals = filtfilt(f, signals)

    return signals, f
end


#######################################
#
# Band pass filter
#
#######################################

function bandpass_filter(signals::Array, lower::Number, upper::Number, fs::Number, n::Int, rp::Number)

    # Type 1 Chebychev filter
    # TODO filtfilt does not work. Why not?

    signals = convert(Array{Float64}, signals)

    f = digitalfilter(Bandpass(lower, upper, fs=fs), Chebyshev1(n, rp))

    info("Bandpass filtering $(size(signals)[end]) channels.     $lower < Hz < $upper")
    debug("Filter order = $n, fs = $fs")

    signals = filt(f, signals)
    signals = filt(f, flipud(signals))
    signals = flipud(signals)

    return signals, f
end


#######################################
#
# Filter compensation
#
#######################################

function compensate_for_filter(d::Dict, spectrum::AbstractArray, fs::Real)

    frequencies = linspace(0, 1, int(size(spectrum, 1))) * fs / 2

    key_name = "filter"
    key_numb = 1
    key      = string(key_name, key_numb)

    while haskey(d, key)

        spectrum = compensate_for_filter(d[key], spectrum, frequencies, fs)

        debug("Accounted for $key response in spectrum estimation")

        key_numb += 1
        key = string(key_name, key_numb)
    end

    return spectrum
end


@doc doc"""
Recover the spectrum of signal by compensating for filtering done.

### Input

* filter: The filter used on the spectrum
* spectrum: Spectrum of signal
* frequencies: Array of frequencies you want to apply the compensation to
* fs: Sampling rate

### Output

* spectrum: Spectrum of the signal after comensating for the filter


""" ->
function compensate_for_filter(filter::Filter, spectrum::AbstractArray, frequencies::AbstractArray, fs::Real)
    #TODO Extend this to arbitrary number of dimensions rather than the hard coded 3

    filter_response     = freqz(filter, frequencies, fs)

    for f = 1:length(filter_response)
        spectrum[f, :, :] = spectrum[f, :, :] ./ abs(filter_response[f])^2
    end

    return spectrum
end
