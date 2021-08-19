var documenterSearchIndex = {"docs":
[{"location":"assr/functions/#Functions","page":"API","title":"Functions","text":"","category":"section"},{"location":"assr/functions/","page":"API","title":"API","text":"A number of functions are provided for the processing of SSR data.","category":"page"},{"location":"assr/functions/#Import","page":"API","title":"Import","text":"","category":"section"},{"location":"assr/functions/","page":"API","title":"API","text":"read_SSR","category":"page"},{"location":"assr/functions/#EEG.read_SSR","page":"API","title":"EEG.read_SSR","text":"Read SSR from file or IO stream\n\nRead a file or IO stream and store the data in an SSR type.\n\nMatching .mat files are read and modulation frequency information extracted. Failing that, user passed arguments are used or the modulation frequency is extracted from the file name.\n\nArguments\n\nfname: Name of the file to be read\nmin_epoch_length: Minimum epoch length in samples. Shorter epochs will be removed (0)\nmax_epoch_length: Maximum epoch length in samples. Longer epochs will be removed (0 = all)\nvalid_triggers: Triggers that are considered valid, others are removed ([1,2])\nstimulation_amplitude: Amplitude of stimulation (NaN)\nmodulationrate: Modulation frequency of SSR stimulation (NaN)\ncarrier_frequency: Carrier frequency (NaN)\nparticipant_name: Name of participant (\"\")\nremove_first: Number of epochs to be removed from start of recording (0)\nmax_epochs: Maximum number of epochs to retain (0 = all)\nenv (nothing)\nbkt (\"\")\n\nSupported file formats\n\nBIOSEMI (.bdf)\n\n\n\n\n\n","category":"function"},{"location":"assr/functions/#Preprocessing","page":"API","title":"Preprocessing","text":"","category":"section"},{"location":"assr/functions/#Filtering","page":"API","title":"Filtering","text":"","category":"section"},{"location":"assr/functions/","page":"API","title":"API","text":"highpass_filter(::SSR)","category":"page"},{"location":"assr/functions/#EEG.highpass_filter-Tuple{SSR}","page":"API","title":"EEG.highpass_filter","text":"highpass_filter(a::SSR; cutOff::Real=2, fs::Real=samplingrate(a), order::Int=3, tolerance::Real=0.01, kwargs...)\n\nApplly a high pass filter.\n\nA zero phase high pass filter is applied to the data using filtfilt. A check is performed to ensure the filter does not affect the modulation rate. The filter coefficents are stored in the processing field.\n\nExample\n\na = highpass_filter(a)\n# or\na = highpass_filter(a, cutOff = 1)\n\n\n\n\n\n","category":"method"},{"location":"assr/functions/#Referencing","page":"API","title":"Referencing","text":"","category":"section"},{"location":"assr/functions/","page":"API","title":"API","text":"rereference(::SSR, ::AbstractString)","category":"page"},{"location":"assr/functions/#EEG.rereference-Tuple{SSR, AbstractString}","page":"API","title":"EEG.rereference","text":"rereference(a::SSR, refChan::Union{AbstractString, Array{AbstractString}}; kwargs...)\n\nReference data to specified channel(s).\n\nExample\n\na = rereference(a, \"Cz\")\n# or\na = rereference(a, [\"P9\", \"P10\"])\n\n\n\n\n\n","category":"method"},{"location":"assr/functions/#Plotting","page":"API","title":"Plotting","text":"","category":"section"},{"location":"assr/functions/","page":"API","title":"API","text":"plot_timeseries(::SSR)","category":"page"},{"location":"assr/functions/#EEG.plot_timeseries-Tuple{SSR}","page":"API","title":"EEG.plot_timeseries","text":"plot_timeseries(s::SSR; channels, fs, kwargs)\n\nPlot an SSR recording.\n\nPlot detailed single channel or general multichanel figure depending on how many channels are requested.\n\nInput\n\ns: SSR type\nchannels: The channels you want to plot, all if not specified\nfs: Sample rate\nOther optional arguements are passed to the Plots.jl functions\n\nOutput\n\nReturns a figure\n\nExample\n\nplot1 = plot_timeseries(s, channels=[\"P6\", \"Cz\"], plot_points=8192*4)\ndraw(PDF(\"timeseries.pdf\", 10inch, 6inch), plot1)\n\n\n\n\n\n","category":"method"},{"location":"api/#Library","page":"API","title":"Library","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"","category":"page"},{"location":"api/","page":"API","title":"API","text":"CurrentModule = EEG","category":"page"},{"location":"api/#Module","page":"API","title":"Module","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"EEG","category":"page"},{"location":"api/#To-be-sorted","page":"API","title":"To be sorted","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"remove_template\nimport_biosemi \nadd_channel\njoin_triggers\nkeep_channel!\nvalidate_triggers\nclean_triggers\nremove_channel!\nsamplingrate\nDipole\nextract_epochs\nVolumeImage\nfind_dipoles\nfind_location","category":"page"},{"location":"api/#EEG.remove_template","page":"API","title":"EEG.remove_template","text":"Remove a template signal from each column of an array\n\nArguments\n\nsignals: Original signals to be modified  (samples x channels)\ntemplate: Template to remove from each signal\n\nReturns\n\nSignals with template removed\n\n\n\n\n\n","category":"function"},{"location":"api/#EEG.import_biosemi","page":"API","title":"EEG.import_biosemi","text":"Import Biosemi files\n\n\n\n\n\n","category":"function"},{"location":"api/#EEG.add_channel","page":"API","title":"EEG.add_channel","text":"Add a channel to the SSR type with specified channel names.\n\nExample\n\nAdd a channel called Merged\n\ns = read_SSR(filename)\nnew_channel = mean(s.data, 2)\ns = add_channel(s, new_channel, \"Merged\")\n\n\n\n\n\n","category":"function"},{"location":"api/#EEG.join_triggers","page":"API","title":"EEG.join_triggers","text":"Append the trigger information of one SSR type to another. Places the trigger information at the end of first file\n\nExample\n\njoin_triggers(a, b)\n\n\n\n\n\n","category":"function"},{"location":"api/#EEG.keep_channel!","page":"API","title":"EEG.keep_channel!","text":"Remove all channels except those requested from SSR.\n\nExample\n\nRemove all channels except Cz and those in the set called EEG_Vanvooren_2014_Right\n\na = read_SSR(filename)\nkeep_channel!(a, [EEG_Vanvooren_2014_Right, \"Cz\"])\n\n\n\n\n\n","category":"function"},{"location":"api/#EEG.validate_triggers","page":"API","title":"EEG.validate_triggers","text":"Validate trigger channel\n\n\n\n\n\n","category":"function"},{"location":"api/#EEG.clean_triggers","page":"API","title":"EEG.clean_triggers","text":"Clean trigger channel\n\n\n\n\n\n","category":"function"},{"location":"api/#EEG.remove_channel!","page":"API","title":"EEG.remove_channel!","text":"Remove specified channels from SSR.\n\nExample\n\nRemove channel Cz and those in the set called EEG_Vanvooren_2014_Right\n\na = read_SSR(filename)\nremove_channel!(a, [EEG_Vanvooren_2014_Right, \"Cz\"])\n\n\n\n\n\n","category":"function"},{"location":"api/#EEG.samplingrate","page":"API","title":"EEG.samplingrate","text":"Return the sampling rate of a steady state type. If no type is provided, the sampling rate is returned as a floating point.\n\nExample\n\nReturn the sampling rate of a recording\n\ns = read_SSR(filename)\nsamplingrate(s)\n\n\n\n\n\n","category":"function"},{"location":"api/#EEG.Dipole","page":"API","title":"EEG.Dipole","text":"Dipole type.\n\nParameters\n\ncoord_system: The coordinate system that the locations are stored in\nx,y,z: Location of dipole\nx,y,z/ori: Orientation of dipole\ncolor: Color of dipole for plotting\nstate: State of dipol\nsize: size of dipole\n\n\n\n\n\n","category":"type"},{"location":"api/#EEG.extract_epochs","page":"API","title":"EEG.extract_epochs","text":"Extract epoch data from array of channels.\n\nInput\n\nArray of raw data. Samples x Channels\nDictionary of trigger information\nVector of valid trigger numbers\nNumber of first triggers to remove\nNumber of end triggers to remove\n\nExample\n\nepochs = extract_epochs(data, triggers, [1,2], 0, 0)\n\n\n\n\n\nExtract epoch data from SSR\n\nArguments\n\na: A SSR object\nvalid_triggers: Trigger numbers that are considered valid ([1,2])\nremove_first: Remove the first n triggers (0)\nremove_last: Remove the last n triggers (0)\n\nExample\n\nepochs = extract_epochs(SSR, valid_triggers=[1,2])\n\n\n\n\n\n","category":"function"},{"location":"api/#EEG.VolumeImage","page":"API","title":"EEG.VolumeImage","text":"Volume Image\n\nThis composite type contains volume image information\n\nFields\n\ndata: contains the recorded data\nx, y, z, t Arrays containing spatial and time information\nmethod AbstractString of method used to compute tomography\ninfo: additional information in dictionary\n\nprocessing Fields\n\nThe following standard names are used when saving data to the info dictionary.\n\nRegularisation: Regularisation used in tomography\nNormalisationConstant: Value used to normalise image to maximum of 1\nFileName: Name of file\n\n\n\n\n\n","category":"type"},{"location":"api/#EEG.find_dipoles","page":"API","title":"EEG.find_dipoles","text":"Find all dipole in an activity map.\n\nDetermines the local maxima in a 3 dimensional array\n\nInput\n\ns: Activity in 3d matrix\nwindow: Windowing to use in each dimension for min max filter\nx,y,z: Coordinates associated with s matrix\n\nOutput\n\ndips: An array of dipoles\n\n\n\n\n\n","category":"function"},{"location":"api/#EEG.find_location","page":"API","title":"EEG.find_location","text":"Find index of location of coordinate or dipole in leadfield\n\n\n\n\n\nFind indicies of location in VolumeImage\n\n\n\n\n\n","category":"function"},{"location":"api/#IO","page":"API","title":"IO","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"read_elp\nwrite_avr\nread_avr\nread_evt\nread_sfp\nread_dat\nread_bsa","category":"page"},{"location":"api/#EEG.read_elp","page":"API","title":"EEG.read_elp","text":"Read elp file containing sensor locations\n\nInput\n\nfname: Name or path for the sfp file\ncoordinate: Coordinate system for electrode location\nr: Radius for converting spherical coords\n\nOutput\n\nelecs: Array of electrode objects\n\n\n\n\n\n","category":"function"},{"location":"api/#EEG.write_avr","page":"API","title":"EEG.write_avr","text":"Write AVR file\n\n\n\n\n\n","category":"function"},{"location":"api/#EEG.read_avr","page":"API","title":"EEG.read_avr","text":"Read AVR (.avr) file\n\nInput\n\nfname: Name or path for the AVR file\n\nOutput\n\ndata: Array of data read from AVR file. Each column represents a channel, and each row represents a point.\nchanNames: Channel Names\n\n\n\n\n\n","category":"function"},{"location":"api/#EEG.read_evt","page":"API","title":"EEG.read_evt","text":"Read *.evt file and convert to form for EEG.jl\n\n\n\n\n\n","category":"function"},{"location":"api/#EEG.read_sfp","page":"API","title":"EEG.read_sfp","text":"Read sfp file containing sensor locations\n\nInput\n\nfname: Path for the sfp file\n\nOutput\n\nelec: Electrodes object\n\n\n\n\n\n","category":"function"},{"location":"api/#EEG.read_dat","page":"API","title":"EEG.read_dat","text":"Read dat files\n\nArguments\n\nfname: Name or path for the dat file\n\nReturns\n\nx: Range of x values\ny: Range of y values\nz: Range of z values\ncomplete_data: Array (x × y × z x t)\nsample_times\n\nReferences\n\nFile specs were taken from fieldtrip\n\n\n\n\n\n","category":"function"},{"location":"api/#EEG.read_bsa","page":"API","title":"EEG.read_bsa","text":"Read Besa's BSA (.bsa) file\n\nInput\n\nfname: Name or path for the BSA file\n\nOutput\n\nbsa: Dipole object\n\n\n\n\n\n","category":"function"},{"location":"api/#Channels","page":"API","title":"Channels","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"match_sensors\ntrim_channel\nchannelnames\nmerge_channels\nchannel_rejection","category":"page"},{"location":"api/#EEG.match_sensors","page":"API","title":"EEG.match_sensors","text":"Match a set of electrodes to those provided\n\nusage: lf, valid = matchsensors(electrodes, sensorlabels)\n\n\n\n\n\n","category":"function"},{"location":"api/#EEG.trim_channel","page":"API","title":"EEG.trim_channel","text":"Trim SSR recording by removing data after stop specifed samples.\n\nOptional Parameters\n\nstart Remove samples before this value\n\nExample\n\nRemove the first 8192 samples and everything after 8192*300 samples\n\ns = trim_channel(s, 8192*300, start=8192)\n\n\n\n\n\n","category":"function"},{"location":"api/#EEG.channelnames","page":"API","title":"EEG.channelnames","text":"Return the names of sensors in SSR measurement.\n\nExample\n\ns = read_SSR(filename)\nchannelnames(s)\n\n\n\n\n\nChange the names of sensors in SSR measurement.\n\nExample\n\ns = read_SSR(filename)\nchannelnames(s, 1, \"Fp1\")\n\n\n\n\n\n","category":"function"},{"location":"api/#EEG.merge_channels","page":"API","title":"EEG.merge_channels","text":"Merge SSR channels listed in merge_Chans and label the averaged channel as new_name\n\nIf multiple channels are listed then the average of those channels will be added.\n\nExample\n\ns = merge_channels(s, [\"P6\", \"P8\"], \"P68\")\n\n\n\n\n\n","category":"function"},{"location":"api/#EEG.channel_rejection","page":"API","title":"EEG.channel_rejection","text":"Reject channels with too great a variance.\n\nRejection can be based on a threshold or dynamicly chosen based on the variation of all channels.\n\nArguments\n\nsignals: Array of data in format samples x channels\nthreshold_abs: Absolute threshold to remove channels with variance above this value\nthreshold_std: Reject channels with a variance more than n times the std of all channels\n\nReturns\n\nAn array indicating the channels to be kept\n\n\n\n\n\n","category":"function"},{"location":"api/#Preprocessing","page":"API","title":"Preprocessing","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"rereference\nhighpass_filter\nlowpass_filter\nbandpass_filter\ncompensate_for_filter\nepoch_rejection\npeak2peak","category":"page"},{"location":"api/#EEG.rereference","page":"API","title":"EEG.rereference","text":"Re reference a signals to specific signal channel by index.\n\nIf multiple channels are specififed, their average is used as the reference.\n\nArguments\n\nsignals: Original signals to be modified\nrefChan: Index of channels to be used as reference\n\nReturns\n\nRereferenced signals\n\n\n\n\n\nRe-reference a signals to specific signal channel by name.\n\nIf multiple channels are specififed, their average is used as the reference. Or you can specify to use the average reference.\n\nArguments\n\nsignals: Original signals to be modified\nrefChan: List of channels to be used as reference or average\nchanNames: List of channel names associated with signals array\n\nReturns\n\nRereferenced signals\n\n\n\n\n\nrereference(a::SSR, refChan::Union{AbstractString, Array{AbstractString}}; kwargs...)\n\nReference data to specified channel(s).\n\nExample\n\na = rereference(a, \"Cz\")\n# or\na = rereference(a, [\"P9\", \"P10\"])\n\n\n\n\n\n","category":"function"},{"location":"api/#EEG.highpass_filter","page":"API","title":"EEG.highpass_filter","text":"High pass filter applied in forward and reverse direction\n\nSimply a wrapper for the DSP.jl functions\n\nArguments\n\nsignals: Signal data in the format samples x channels\ncutOff: Cut off frequency in Hz\nfs: Sampling rate\norder: Filter orde\n\nReturns\n\nfiltered signal\nfilter used on signal\n\n\n\n\n\nhighpass_filter(a::SSR; cutOff::Real=2, fs::Real=samplingrate(a), order::Int=3, tolerance::Real=0.01, kwargs...)\n\nApplly a high pass filter.\n\nA zero phase high pass filter is applied to the data using filtfilt. A check is performed to ensure the filter does not affect the modulation rate. The filter coefficents are stored in the processing field.\n\nExample\n\na = highpass_filter(a)\n# or\na = highpass_filter(a, cutOff = 1)\n\n\n\n\n\n","category":"function"},{"location":"api/#EEG.lowpass_filter","page":"API","title":"EEG.lowpass_filter","text":"Low pass filter applied in forward and reverse direction\n\nSimply a wrapper for the DSP.jl functions\n\nInput\n\nsignals: Signal data in the format samples x channels\ncutOff: Cut off frequency in Hz\nfs: Sampling rate\norder: Filter orde\n\nOutput\n\nfiltered signal\nfilter used on signal\n\n\n\n\n\n","category":"function"},{"location":"api/#EEG.bandpass_filter","page":"API","title":"EEG.bandpass_filter","text":"Band pass filter\n\n\n\n\n\n","category":"function"},{"location":"api/#EEG.compensate_for_filter","page":"API","title":"EEG.compensate_for_filter","text":"Recover the spectrum of signal by compensating for filtering done.\n\nArguments\n\nfilter: The filter used on the spectrum\nspectrum: Spectrum of signal\nfrequencies: Array of frequencies you want to apply the compensation to\nfs: Sampling rate\n\nReturns\n\nSpectrum of the signal after comensating for the filter\n\nTODO\n\nExtend this to arbitrary number of dimensions rather than the hard coded 3\n\n\n\n\n\n","category":"function"},{"location":"api/#EEG.epoch_rejection","page":"API","title":"EEG.epoch_rejection","text":"Reject epochs based on the maximum peak to peak voltage within an epoch across all channels\n\nArguments\n\nepochs: Array containing the epoch data in the format samples x epochs x channels\nretain_percentage: The percentage of epochs to retain\nrejection_method: Method to be used for epoch rejection (peak2peak)\n\nReturns\n\nAn array with a reduced amount of entries in the epochs dimension\n\n\n\n\n\n","category":"function"},{"location":"api/#EEG.peak2peak","page":"API","title":"EEG.peak2peak","text":"Find the peak to peak value for each epoch to be returned to epoch_rejection()\n\n\n\n\n\n","category":"function"},{"location":"api/#Statistics","page":"API","title":"Statistics","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"ftest","category":"page"},{"location":"api/#EEG.ftest","page":"API","title":"EEG.ftest","text":"Calculates the F test as is commonly implemented in SSR research. TODO: Add references to MASTER and Luts et al\n\nParameters\n\nSweep measurements. Samples x Sweeps x Channels\nFrequency(ies) of interest (Hz)\nSampling rate (Hz)\nThe amount of data to use on each side of frequency of interest to estimate noise (Hz)\nFilter used on the sweep data. If provided then is compensated for\nThe number of bins to ignore on each side of the frequency of interest\n\nReturns\n\nSignal to noise ratio in dB\nSignal phase at frequency of interest\nSignal power at frequency of interest\nNoise power estimated of side frequencies\nF statistic\n\n\n\n\n\n","category":"function"},{"location":"api/#Plotting","page":"API","title":"Plotting","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"plot_single_channel_timeseries\nplot_multi_channel_timeseries","category":"page"},{"location":"api/#EEG.plot_single_channel_timeseries","page":"API","title":"EEG.plot_single_channel_timeseries","text":"Plot a single channel time series\n\nInput\n\nsignal: Vector of data\nfs: Sample rate\nchannels: Name of channel to plot\nplot_points: Number of points to plot, they will be equally spread. Used to speed up plotting\nOther optional arguements are passed to gadfly plot function\n\nOutput\n\nReturns a figure\n\n\n\n\n\n","category":"function"},{"location":"api/#EEG.plot_multi_channel_timeseries","page":"API","title":"EEG.plot_multi_channel_timeseries","text":"Plot a multi channel time series\n\nInput\n\nsignals: Array of data\nfs: Sample rate\nchannels: Name of channels\nplot_points: Number of points to plot, they will be equally spread. Used to speed up plotting\nOther optional arguements are passed to gadfly plot function\n\nOutput\n\nReturns a figure\n\n\n\n\n\n","category":"function"},{"location":"assr/examples/#Examples","page":"Example","title":"Examples","text":"","category":"section"},{"location":"assr/examples/#Reading-data","page":"Example","title":"Reading data","text":"","category":"section"},{"location":"assr/examples/","page":"Example","title":"Example","text":"The following code reads a steady state response recording stored in biosemi data format. The function extracts standard steady state parameters from the file name.","category":"page"},{"location":"assr/examples/","page":"Example","title":"Example","text":"using DisplayAs # hide\nusing EEG, DataDeps, Plots\ndata_path = joinpath(datadep\"BioSemiTestFiles\", \"Newtest17-2048.bdf\")\ns = read_SSR(data_path)","category":"page"},{"location":"assr/examples/#Get-info","page":"Example","title":"Get info","text":"","category":"section"},{"location":"assr/examples/","page":"Example","title":"Example","text":"What are the channel names?","category":"page"},{"location":"assr/examples/","page":"Example","title":"Example","text":"println(channelnames(s))","category":"page"},{"location":"assr/examples/","page":"Example","title":"Example","text":"And the sample rate?","category":"page"},{"location":"assr/examples/","page":"Example","title":"Example","text":"samplingrate(s)","category":"page"},{"location":"assr/examples/","page":"Example","title":"Example","text":"Trigger info? This needs to be changed so it abstracts away from the type. It should be a function as in the two examples above.","category":"page"},{"location":"assr/examples/","page":"Example","title":"Example","text":"s.triggers","category":"page"},{"location":"assr/examples/#Filter-data","page":"Example","title":"Filter data","text":"","category":"section"},{"location":"assr/examples/","page":"Example","title":"Example","text":"s = highpass_filter(s)","category":"page"},{"location":"assr/examples/#Rereference-data","page":"Example","title":"Rereference data","text":"","category":"section"},{"location":"assr/examples/","page":"Example","title":"Example","text":"s = rereference(s, \"A9\")","category":"page"},{"location":"assr/examples/#Rereference-data-2","page":"Example","title":"Rereference data","text":"","category":"section"},{"location":"assr/examples/","page":"Example","title":"Example","text":"plot_timeseries(s, channels=\"A6\")\ncurrent() |> DisplayAs.PNG # hide","category":"page"},{"location":"#EEG.jl-Manual","page":"Home","title":"EEG.jl Manual","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Process EEG files in Julia.","category":"page"},{"location":"","page":"Home","title":"Home","text":"For research only. Not for clinical use. Use at your own risk.","category":"page"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = EEG","category":"page"},{"location":"assr/assr/","page":"Overview","title":"Overview","text":"SSR","category":"page"},{"location":"assr/assr/#EEG.SSR","page":"Overview","title":"EEG.SSR","text":"Type for storing steady state response (SSR) data.\n\nThe minimum required information for SSR recording is stored in the type. Additional information can be stored in the processing field. To facilitate processing, specific names are used in the processing dictionary.\n\nFields\n\ndata: contains the recorded data\ntrigers: contains information about timing for creation of epochs\nsystem_codes: contains system information\nsamplingrate: the sampling rate of the data\nmodulationrate: the modulation rate of the stimulus\nreference_channel: the channel the data has been referenced to\nfile_path and file_name: where the file was read in from\nchannel_names: the names of the channels\nprocessing: dictionary type to store analysis\nheader: additional information read from the file\n\nAdditional processing fields\n\nThe following standard names are used when saving data to the processing dictionary.\n\nName: The identifier for the participant\nSide: Side of stimulation\nCarrier_Frequency: Carrier frequency of the stimulus\nAmplitude: Amplitude of the stimulus\nepochs: The epochs extracted from the recording\nsweeps: The extracted sweeps from the recording\n\nExample\n\nPut an example here\n\ns = SSR(\"filename\")\n\n\n\n\n\n","category":"type"},{"location":"types/","page":"Types","title":"Types","text":"A number of types are provided to handle different types of data. Functions are provided to perform common operations on each type.","category":"page"}]
}
