
/*
Code generated with Faust version 2.21.5
Compilation options: -lang wasm-ib -scal -ftz 2
*/

function getJSONfreeverbTEST() {
	return '{"name": "freeverbTEST","filename": "freeverbTEST.dsp","version": "2.21.5","compile_options": "-lang wasm-ib -scal -ftz 2","include_pathnames": ["/usr/local/share/faust","/usr/local/share/faust","/usr/share/faust",".","/tmp/sessions/9ED5F4CE83FF9968EC1E9824D5F76BCBAFE2D071/web/wap"],"size": 16504,"inputs": 1,"outputs": 1,"meta": [ { "basics_lib_name": "Faust Basic Element Library" },{ "basics_lib_version": "0.1" },{ "compilation_options": "-single -scal -I libraries/ -I project/ -lang wasm" },{ "delays_lib_name": "Faust Delay Library" },{ "delays_lib_version": "0.1" },{ "designer": "Robert A. Moog" },{ "filename": "freeverbTEST.dsp" },{ "filters_lib_lowpass0_highpass1": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_name": "Faust Filters Library" },{ "filters_lib_nlf2_author": "Julius O. Smith III" },{ "filters_lib_nlf2_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_nlf2_license": "MIT-style STK-4.3 license" },{ "library_path": "FaustDSP" },{ "maths_lib_author": "GRAME" },{ "maths_lib_copyright": "GRAME" },{ "maths_lib_license": "LGPL with exception" },{ "maths_lib_name": "Faust Math Library" },{ "maths_lib_version": "2.1" },{ "name": "freeverbTEST" },{ "oscillators_lib_name": "Faust Oscillator Library" },{ "oscillators_lib_version": "0.0" },{ "signals_lib_name": "Faust Signal Routing Library" },{ "signals_lib_version": "0.0" }],"ui": [ {"type": "hgroup","label": "freeverbTEST","items": [ {"type": "hgroup","label": "Effects","meta": [{ "1": "" }],"items": [ {"type": "hgroup","label": "Flanger","meta": [{ "5": "" }],"items": [ {"type": "vgroup","label": "Knobs","meta": [{ "0": "" }],"items": [ {"type": "vslider","label": "Delay","address": "/freeverbTEST/Effects/Flanger/Knobs/Delay","index": 16476,"meta": [{ "1": "" },{ "midi": "ctrl 50" },{ "style": "knob" }],"init": 0.22,"min": 0,"max": 1,"step": 1},{"type": "vslider","label": "Rate","address": "/freeverbTEST/Effects/Flanger/Knobs/Rate","index": 36,"meta": [{ "1": "" },{ "midi": "ctrl 2" },{ "style": "knob" },{ "unit": "Hz" }],"init": 0.5,"min": 0,"max": 10,"step": 0.01},{"type": "vslider","label": "Depth","address": "/freeverbTEST/Effects/Flanger/Knobs/Depth","index": 16492,"meta": [{ "3": "" },{ "midi": "ctrl 3" },{ "style": "knob" }],"init": 0.75,"min": 0,"max": 1,"step": 0.001},{"type": "vslider","label": "Feedback","address": "/freeverbTEST/Effects/Flanger/Knobs/Feedback","index": 76,"meta": [{ "5": "" },{ "midi": "ctrl 4" },{ "style": "knob" }],"init": 0,"min": -0.995,"max": 0.99,"step": 0.001},{"type": "vslider","label": "Waveshape","address": "/freeverbTEST/Effects/Flanger/Knobs/Waveshape","index": 4,"meta": [{ "7": "" },{ "midi": "ctrl 54" },{ "style": "knob" }],"init": 0,"min": 0,"max": 1,"step": 0.001}]},{"type": "vgroup","label": "Switches","meta": [{ "1": "" }],"items": [ {"type": "vslider","label": "Invert","address": "/freeverbTEST/Effects/Flanger/Switches/Invert","index": 16488,"meta": [{ "1": "" },{ "midi": "ctrl 49" },{ "style": "knob" }],"init": 0,"min": 0,"max": 1,"step": 1}]}]},{"type": "hgroup","label": "Reverb","meta": [{ "7": "" }],"items": [ {"type": "vgroup","label": "Switches","meta": [{ "1": "" }],"items": [ {"type": "checkbox","label": "Enable","address": "/freeverbTEST/Effects/Reverb/Switches/Enable","index": 0,"meta": [{ "0": "" },{ "midi": "ctrl 105" }]}]}]}]}]}]}';
}
function getBase64CodefreeverbTEST() { return "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bWUiOiAiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5IiB9LHsgImJhc2ljc19saWJfdmVyc2lvbiI6ICIwLjEiIH0seyAiY29tcGlsYXRpb25fb3B0aW9ucyI6ICItc2luZ2xlIC1zY2FsIC1JIGxpYnJhcmllcy8gLUkgcHJvamVjdC8gLWxhbmcgd2FzbSIgfSx7ICJkZWxheXNfbGliX25hbWUiOiAiRmF1c3QgRGVsYXkgTGlicmFyeSIgfSx7ICJkZWxheXNfbGliX3ZlcnNpb24iOiAiMC4xIiB9LHsgImRlc2lnbmVyIjogIlJvYmVydCBBLiBNb29nIiB9LHsgImZpbGVuYW1lIjogImZyZWV2ZXJiVEVTVC5kc3AiIH0seyAiZmlsdGVyc19saWJfbG93cGFzczBfaGlnaHBhc3MxIjogIkNvcHlyaWdodCAoQykgMjAwMy0yMDE5IGJ5IEp1bGl1cyBPLiBTbWl0aCBJSUkgPGpvc0BjY3JtYS5zdGFuZm9yZC5lZHU+IiB9LHsgImZpbHRlcnNfbGliX25hbWUiOiAiRmF1c3QgRmlsdGVycyBMaWJyYXJ5IiB9LHsgImZpbHRlcnNfbGliX25sZjJfYXV0aG9yIjogIkp1bGl1cyBPLiBTbWl0aCBJSUkiIH0seyAiZmlsdGVyc19saWJfbmxmMl9jb3B5cmlnaHQiOiAiQ29weXJpZ2h0IChDKSAyMDAzLTIwMTkgYnkgSnVsaXVzIE8uIFNtaXRoIElJSSA8am9zQGNjcm1hLnN0YW5mb3JkLmVkdT4iIH0seyAiZmlsdGVyc19saWJfbmxmMl9saWNlbnNlIjogIk1JVC1zdHlsZSBTVEstNC4zIGxpY2Vuc2UiIH0seyAibGlicmFyeV9wYXRoIjogIkZhdXN0RFNQIiB9LHsgIm1hdGhzX2xpYl9hdXRob3IiOiAiR1JBTUUiIH0seyAibWF0aHNfbGliX2NvcHlyaWdodCI6ICJHUkFNRSIgfSx7ICJtYXRoc19saWJfbGljZW5zZSI6ICJMR1BMIHdpdGggZXhjZXB0aW9uIiB9LHsgIm1hdGhzX2xpYl9uYW1lIjogIkZhdXN0IE1hdGggTGlicmFyeSIgfSx7ICJtYXRoc19saWJfdmVyc2lvbiI6ICIyLjEiIH0seyAibmFtZSI6ICJmcmVldmVyYlRFU1QiIH0seyAib3NjaWxsYXRvcnNfbGliX25hbWUiOiAiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5IiB9LHsgIm9zY2lsbGF0b3JzX2xpYl92ZXJzaW9uIjogIjAuMCIgfSx7ICJzaWduYWxzX2xpYl9uYW1lIjogIkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkiIH0seyAic2lnbmFsc19saWJfdmVyc2lvbiI6ICIwLjAiIH1dLCJ1aSI6IFsgeyJ0eXBlIjogImhncm91cCIsImxhYmVsIjogImZyZWV2ZXJiVEVTVCIsIml0ZW1zIjogWyB7InR5cGUiOiAiaGdyb3VwIiwibGFiZWwiOiAiRWZmZWN0cyIsIm1ldGEiOiBbeyAiMSI6ICIiIH1dLCJpdGVtcyI6IFsgeyJ0eXBlIjogImhncm91cCIsImxhYmVsIjogIkZsYW5nZXIiLCJtZXRhIjogW3sgIjUiOiAiIiB9XSwiaXRlbXMiOiBbIHsidHlwZSI6ICJ2Z3JvdXAiLCJsYWJlbCI6ICJLbm9icyIsIm1ldGEiOiBbeyAiMCI6ICIiIH1dLCJpdGVtcyI6IFsgeyJ0eXBlIjogInZzbGlkZXIiLCJsYWJlbCI6ICJEZWxheSIsImFkZHJlc3MiOiAiL2ZyZWV2ZXJiVEVTVC9FZmZlY3RzL0ZsYW5nZXIvS25vYnMvRGVsYXkiLCJpbmRleCI6IDE2NDc2LCJtZXRhIjogW3sgIjEiOiAiIiB9LHsgIm1pZGkiOiAiY3RybCA1MCIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9XSwiaW5pdCI6IDAuMjIsIm1pbiI6IDAsIm1heCI6IDEsInN0ZXAiOiAxfSx7InR5cGUiOiAidnNsaWRlciIsImxhYmVsIjogIlJhdGUiLCJhZGRyZXNzIjogIi9mcmVldmVyYlRFU1QvRWZmZWN0cy9GbGFuZ2VyL0tub2JzL1JhdGUiLCJpbmRleCI6IDM2LCJtZXRhIjogW3sgIjEiOiAiIiB9LHsgIm1pZGkiOiAiY3RybCAyIiB9LHsgInN0eWxlIjogImtub2IiIH0seyAidW5pdCI6ICJIeiIgfV0sImluaXQiOiAwLjUsIm1pbiI6IDAsIm1heCI6IDEwLCJzdGVwIjogMC4wMX0seyJ0eXBlIjogInZzbGlkZXIiLCJsYWJlbCI6ICJEZXB0aCIsImFkZHJlc3MiOiAiL2ZyZWV2ZXJiVEVTVC9FZmZlY3RzL0ZsYW5nZXIvS25vYnMvRGVwdGgiLCJpbmRleCI6IDE2NDkyLCJtZXRhIjogW3sgIjMiOiAiIiB9LHsgIm1pZGkiOiAiY3RybCAzIiB9LHsgInN0eWxlIjogImtub2IiIH1dLCJpbml0IjogMC43NSwibWluIjogMCwibWF4IjogMSwic3RlcCI6IDAuMDAxfSx7InR5cGUiOiAidnNsaWRlciIsImxhYmVsIjogIkZlZWRiYWNrIiwiYWRkcmVzcyI6ICIvZnJlZXZlcmJURVNUL0VmZmVjdHMvRmxhbmdlci9Lbm9icy9GZWVkYmFjayIsImluZGV4IjogNzYsIm1ldGEiOiBbeyAiNSI6ICIiIH0seyAibWlkaSI6ICJjdHJsIDQiIH0seyAic3R5bGUiOiAia25vYiIgfV0sImluaXQiOiAwLCJtaW4iOiAtMC45OTUsIm1heCI6IDAuOTksInN0ZXAiOiAwLjAwMX0seyJ0eXBlIjogInZzbGlkZXIiLCJsYWJlbCI6ICJXYXZlc2hhcGUiLCJhZGRyZXNzIjogIi9mcmVldmVyYlRFU1QvRWZmZWN0cy9GbGFuZ2VyL0tub2JzL1dhdmVzaGFwZSIsImluZGV4IjogNCwibWV0YSI6IFt7ICI3IjogIiIgfSx7ICJtaWRpIjogImN0cmwgNTQiIH0seyAic3R5bGUiOiAia25vYiIgfV0sImluaXQiOiAwLCJtaW4iOiAwLCJtYXgiOiAxLCJzdGVwIjogMC4wMDF9XX0seyJ0eXBlIjogInZncm91cCIsImxhYmVsIjogIlN3aXRjaGVzIiwibWV0YSI6IFt7ICIxIjogIiIgfV0sIml0ZW1zIjogWyB7InR5cGUiOiAidnNsaWRlciIsImxhYmVsIjogIkludmVydCIsImFkZHJlc3MiOiAiL2ZyZWV2ZXJiVEVTVC9FZmZlY3RzL0ZsYW5nZXIvU3dpdGNoZXMvSW52ZXJ0IiwiaW5kZXgiOiAxNjQ4OCwibWV0YSI6IFt7ICIxIjogIiIgfSx7ICJtaWRpIjogImN0cmwgNDkiIH0seyAic3R5bGUiOiAia25vYiIgfV0sImluaXQiOiAwLCJtaW4iOiAwLCJtYXgiOiAxLCJzdGVwIjogMX1dfV19LHsidHlwZSI6ICJoZ3JvdXAiLCJsYWJlbCI6ICJSZXZlcmIiLCJtZXRhIjogW3sgIjciOiAiIiB9XSwiaXRlbXMiOiBbIHsidHlwZSI6ICJ2Z3JvdXAiLCJsYWJlbCI6ICJTd2l0Y2hlcyIsIm1ldGEiOiBbeyAiMSI6ICIiIH1dLCJpdGVtcyI6IFsgeyJ0eXBlIjogImNoZWNrYm94IiwibGFiZWwiOiAiRW5hYmxlIiwiYWRkcmVzcyI6ICIvZnJlZXZlcmJURVNUL0VmZmVjdHMvUmV2ZXJiL1N3aXRjaGVzL0VuYWJsZSIsImluZGV4IjogMCwibWV0YSI6IFt7ICIwIjogIiIgfSx7ICJtaWRpIjogImN0cmwgMTA1IiB9XX1dfV19XX1dfV19"; }

/*
 faust2wasm: GRAME 2017-2019
*/

'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
	alert("AudioWorklet is not supported in this browser !")
}

class freeverbTESTNode extends AudioWorkletNode {

    constructor(context, baseURL, options)
    {
        super(context, 'freeverbTEST', options);
        
        this.baseURL = baseURL;
        this.json = options.processorOptions.json;
        this.json_object = JSON.parse(this.json);
     
        // JSON parsing functions
        this.parse_ui = function(ui, obj)
        {
            for (var i = 0; i < ui.length; i++) {
                this.parse_group(ui[i], obj);
            }
        }

        this.parse_group = function(group, obj)
        {
            if (group.items) {
                this.parse_items(group.items, obj);
            }
        }

        this.parse_items = function(items, obj)
        {
            for (var i = 0; i < items.length; i++) {
            	this.parse_item(items[i], obj);
            }
        }

        this.parse_item = function(item, obj)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                this.parse_items(item.items, obj);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputs_items.push(item.address);
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputs_items.push(item.address);
                obj.descriptor.push(item);
                // Decode MIDI
                if (item.meta !== undefined) {
                    for (var i = 0; i < item.meta.length; i++) {
                        if (item.meta[i].midi !== undefined) {
                            if (item.meta[i].midi.trim() === "pitchwheel") {
                                obj.fPitchwheelLabel.push({ path:item.address,
                                      min:parseFloat(item.min),
                                      max:parseFloat(item.max) });
                            } else if (item.meta[i].midi.trim().split(" ")[0] === "ctrl") {
                                obj.fCtrlLabel[parseInt(item.meta[i].midi.trim().split(" ")[1])]
                                .push({ path:item.address,
                                      min:parseFloat(item.min),
                                      max:parseFloat(item.max) });
                            }
                        }
                    }
                }      
                // Define setXXX/getXXX, replacing '/c' with 'C' everywhere in the string
                var set_name = "set" + item.address;
                var get_name = "get" + item.address;
                set_name = set_name.replace(/\/./g, (x) => { return x.substr(1,1).toUpperCase(); });     
                get_name = get_name.replace(/\/./g, (x) => { return x.substr(1,1).toUpperCase(); });
                obj[set_name] = (val) => { obj.setParamValue(item.address, val); };
                obj[get_name] = () => { return obj.getParamValue(item.address); };
                //console.log(set_name);
                //console.log(get_name);
            }
        }

        this.output_handler = null;

        // input/output items
        this.inputs_items = [];
        this.outputs_items = [];
        this.descriptor = [];
        
        // MIDI
        this.fPitchwheelLabel = [];
        this.fCtrlLabel = new Array(128);
        for (var i = 0; i < this.fCtrlLabel.length; i++) { this.fCtrlLabel[i] = []; }

        // Parse UI
        this.parse_ui(this.json_object.ui, this);

        // Set message handler
        this.port.onmessage = this.handleMessage.bind(this);
        try {
            if (this.parameters) this.parameters.forEach(p => p.automationRate = "k-rate");
        } catch (e) {}
    }

    // To be called by the message port with messages coming from the processor
    handleMessage(event)
    {
        var msg = event.data;
        if (this.output_handler) {
            this.output_handler(msg.path, msg.value);
        }
    }

    // Public API
    
    /**
     * Destroy the node, deallocate resources.
     */
    destroy()
    {
        this.port.postMessage({ type: "destroy" });
        this.port.close();
    }

    /**
     *  Returns a full JSON description of the DSP.
     */
    getJSON()
    {
        return this.json;
    }
    
    // For WAP
    async getMetadata() 
    {
        return new Promise(resolve => {
            let real_url = (this.baseURL === "") ? "main.json" : (this.baseURL + "/main.json");
            fetch(real_url).then(responseJSON => {
            	return responseJSON.json();
        	}).then(json => {
        		resolve(json);
        	})
    	});
    }

    /**
     *  Set the control value at a given path.
     *
     * @param path - a path to the control
     * @param val - the value to be set
     */
    setParamValue(path, val)
    {
        // Needed for sample accurate control
        this.parameters.get(path).setValueAtTime(val, 0);
    }
    
    // For WAP
    setParam(path, val)
    {
        // Needed for sample accurate control
        this.parameters.get(path).setValueAtTime(val, 0);
    }

    /**
     *  Get the control value at a given path.
     *
     * @return the current control value
     */
    getParamValue(path)
    {
        return this.parameters.get(path).value;
    }
    
    // For WAP
    getParam(path) 
    {
        return this.parameters.get(path).value;
    }

    /**
     * Setup a control output handler with a function of type (path, value)
     * to be used on each generated output value. This handler will be called
     * each audio cycle at the end of the 'compute' method.
     *
     * @param handler - a function of type function(path, value)
     */
    setOutputParamHandler(handler)
    {
        this.output_handler = handler;
    }

    /**
     * Get the current output handler.
     */
    getOutputParamHandler()
    {
        return this.output_handler;
    }

    getNumInputs()
    {
        return parseInt(this.json_object.inputs);
    }

    getNumOutputs()
    {
        return parseInt(this.json_object.outputs);
    }
    
    // For WAP
    inputChannelCount() 
    {
        return parseInt(this.json_object.inputs);
    }

    outputChannelCount() 
    {
        return parseInt(this.json_object.outputs);
    }

    /**
     * Returns an array of all input paths (to be used with setParamValue/getParamValue)
     */
    getParams()
    {
        return this.inputs_items;
    }
    
    // For WAP
    getDescriptor() 
    {
        var desc = {};
        for (const item in this.descriptor) {
            if (this.descriptor.hasOwnProperty(item)) {
                if (this.descriptor[item].label != "bypass") {
                    desc = Object.assign({ [this.descriptor[item].label]: { minValue: this.descriptor[item].min, maxValue: this.descriptor[item].max, defaultValue: this.descriptor[item].init } }, desc);
                }
            }
        }
        return desc;
    }

    /**
     * Control change
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param ctrl - the MIDI controller number (0..127)
     * @param value - the MIDI controller value (0..127)
     */
    ctrlChange(channel, ctrl, value)
    {
        if (this.fCtrlLabel[ctrl] !== []) {
            for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                var path = this.fCtrlLabel[ctrl][i].path;
                this.setParamValue(path, freeverbTESTNode.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
                if (this.output_handler) {
                    this.output_handler(path, this.getParamValue(path));
                }
            }
        }
    }

    /**
     * PitchWeel
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param value - the MIDI controller value (-1..1)
     */
    pitchWheel(channel, wheel)
    {
        for (var i = 0; i < this.fPitchwheelLabel.length; i++) {
            var pw = this.fPitchwheelLabel[i];
            this.setParamValue(pw.path, freeverbTESTNode.remap(wheel, 0, 16383, pw.min, pw.max));
            if (this.output_handler) {
                this.output_handler(pw.path, this.getParamValue(pw.path));
            }
        }
    }

    /**
     * Generic MIDI message handler.
     */
    midiMessage(data)
    {
        var cmd = data[0] >> 4;
        var channel = data[0] & 0xf;
        var data1 = data[1];
        var data2 = data[2];
        
        if (channel === 9) {
            return;
        } else if (cmd === 11) {
            this.ctrlChange(channel, data1, data2);
        } else if (cmd === 14) {
            this.pitchWheel(channel, (data2 * 128.0 + data1));
        }
    }
    
    // For WAP
    onMidi(data) 
    {
     	midiMessage(data);
    }
    
    /**
     * @returns {Object} describes the path for each available param and its current value
     */
    async getState() 
    {
        var params = new Object();
        for (let i = 0; i < this.getParams().length; i++) {
            Object.assign(params, { [this.getParams()[i]]: `${this.getParam(this.getParams()[i])}` });
        }
        return new Promise(resolve => { resolve(params) });
    }

    /**
     * Sets each params with the value indicated in the state object
     * @param {Object} state 
     */
    async setState(state) 
    {
        return new Promise(resolve => {
            for (const param in state) {
                if (state.hasOwnProperty(param)) this.setParam(param, state[param]);
            }
            try {
                this.gui.setAttribute('state', JSON.stringify(state));
            } catch (error) {
                console.warn("Plugin without gui or GUI not defined", error);
            }
            resolve(state);
        })
    }
    
    /**
     * A different call closer to the preset management
     * @param {Object} patch to assign as a preset to the node
     */
    setPatch(patch) 
    {
        this.setState(this.presets[patch])
    }
    
    static remap(v, mn0, mx0, mn1, mx1)
    {
        return (1.0 * (v - mn0) / (mx0 - mn0)) * (mx1 - mn1) + mn1;
    }
    
}

// Factory class
class freeverbTEST {

    /**
     * Factory constructor.
     *
     * @param context - the audio context
     * @param baseURL - the baseURL of the plugin folder
     */
    constructor(context, baseURL = "")
    {
    	console.log("baseLatency " + context.baseLatency);
    	console.log("outputLatency " + context.outputLatency);
    	console.log("sampleRate " + context.sampleRate);
    	
        this.context = context;
        this.baseURL = baseURL;
        this.pathTable = [];
    }

    heap2Str(buf)
    {
        let str = "";
        let i = 0;
        while (buf[i] !== 0) {
            str += String.fromCharCode(buf[i++]);
        }
        return str;
    }
    
    /**
     * Load additionnal resources to prepare the custom AudioWorkletNode. Returns a promise to be used with the created node.
     */
    async load()
    {
        try {
            const importObject = {
                env: {
                    memoryBase: 0,
                    tableBase: 0,
                    _abs: Math.abs,
                        
                    // Float version
                    _acosf: Math.acos,
                    _asinf: Math.asin,
                    _atanf: Math.atan,
                    _atan2f: Math.atan2,
                    _ceilf: Math.ceil,
                    _cosf: Math.cos,
                    _expf: Math.exp,
                    _floorf: Math.floor,
                    _fmodf: (x, y) => x % y,
                    _logf: Math.log,
                    _log10f: Math.log10,
                    _max_f: Math.max,
                    _min_f: Math.min,
                    _remainderf: (x, y) => x - Math.round(x / y) * y,
                    _powf: Math.pow,
                    _roundf: Math.fround,
                    _sinf: Math.sin,
                    _sqrtf: Math.sqrt,
                    _tanf: Math.tan,
                    _acoshf: Math.acosh,
                    _asinhf: Math.asinh,
                    _atanhf: Math.atanh,
                    _coshf: Math.cosh,
                    _sinhf: Math.sinh,
                    _tanhf: Math.tanh,
                        
                    // Double version
                    _acos: Math.acos,
                    _asin: Math.asin,
                    _atan: Math.atan,
                    _atan2: Math.atan2,
                    _ceil: Math.ceil,
                    _cos: Math.cos,
                    _exp: Math.exp,
                    _floor: Math.floor,
                    _fmod: (x, y) => x % y,
                    _log: Math.log,
                    _log10: Math.log10,
                    _max_: Math.max,
                    _min_: Math.min,
                    _remainder: (x, y) => x - Math.round(x / y) * y,
                    _pow: Math.pow,
                    _round: Math.fround,
                    _sin: Math.sin,
                    _sqrt: Math.sqrt,
                    _tan: Math.tan,
                    _acosh: Math.acosh,
                    _asinh: Math.asinh,
                    _atanh: Math.atanh,
                    _cosh: Math.cosh,
                    _sinh: Math.sinh,
                    _tanh: Math.tanh,
                    
                    table: new WebAssembly.Table({ initial: 0, element: "anyfunc" })
                }
            };

            let real_url = (this.baseURL === "") ? "freeverbTEST.wasm" : (this.baseURL + "/freeverbTEST.wasm");
            const dspFile = await fetch(real_url);
            const dspBuffer = await dspFile.arrayBuffer();
            const dspModule = await WebAssembly.compile(dspBuffer);
            const dspInstance = await WebAssembly.instantiate(dspModule, importObject);
            
            return new Promise((resolve, reject) => {   
            
                let HEAPU8 = new Uint8Array(dspInstance.exports.memory.buffer);
                let json = this.heap2Str(HEAPU8);
                let json_object = JSON.parse(json);  
                let options = { wasm_module: dspModule, json: json };
                
                let re = /JSON_STR/g;
                let freeverbTESTProcessorString1 = freeverbTESTProcessorString.replace(re, json);
                let real_url = window.URL.createObjectURL(new Blob([freeverbTESTProcessorString1], { type: 'text/javascript' }));
                
                this.context.audioWorklet.addModule(real_url).then(() => {
                    this.node = new freeverbTESTNode(this.context, this.baseURL, 
                                        { numberOfInputs: (parseInt(json_object.inputs) > 0) ? 1 : 0,
                                        numberOfOutputs: (parseInt(json_object.outputs) > 0) ? 1 : 0,
                                        channelCount: Math.max(1, parseInt(json_object.inputs)),
                                        outputChannelCount: [parseInt(json_object.outputs)],
                                        channelCountMode: "explicit",
                                        channelInterpretation: "speakers",
                                        processorOptions: options });
                    this.node.onprocessorerror = () => { console.log('An error from freeverbTEST-processor was detected.');}
                    return (this.node);
                }).then((node) => {
                    resolve(node);
                }).catch((e) => {
                    reject(e);
                });
            });
            
        } catch (e) {
            console.error(e);
            console.error("Faust " + this.name + " cannot be loaded or compiled");
            return null;
        }
    	
    }
    
    async loadGui()
    {
        return new Promise((resolve, reject) => {
            try {
                // DO THIS ONLY ONCE. If another instance has already been added, do not add the html file again
                let real_url = (this.baseURL === "") ? "main.html" : (this.baseURL + "/main.html");
                if (!this.linkExists(real_url)) {
                    // LINK DOES NOT EXIST, let's add it to the document
                    var link = document.createElement('link');
                    link.rel = 'import';
                    link.href = real_url;
                    document.head.appendChild(link);
                    link.onload = (e) => {
                        // the file has been loaded, instanciate GUI
                        // and get back the HTML elem
                        // HERE WE COULD REMOVE THE HARD CODED NAME
                        var element = createfreeverbTESTGUI(this.node);
                        resolve(element);
                    }
                } else {
                    // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
                    // so we can create another instance
                    var element = createfreeverbTESTGUI(this.node);
                    resolve(element);
                }
            } catch (e) {
                console.log(e);
                reject(e);
            }
        });
    };

	linkExists(url) 
	{
    	return document.querySelectorAll(`link[href="${url}"]`).length > 0;
   	}
}

// Template string for AudioWorkletProcessor

let freeverbTESTProcessorString = `

    'use strict';

    // Monophonic Faust DSP
    class freeverbTESTProcessor extends AudioWorkletProcessor {
        
        // JSON parsing functions
        static parse_ui(ui, obj, callback)
        {
            for (var i = 0; i < ui.length; i++) {
                freeverbTESTProcessor.parse_group(ui[i], obj, callback);
            }
        }
        
        static parse_group(group, obj, callback)
        {
            if (group.items) {
                freeverbTESTProcessor.parse_items(group.items, obj, callback);
            }
        }
        
        static parse_items(items, obj, callback)
        {
            for (var i = 0; i < items.length; i++) {
                callback(items[i], obj, callback);
            }
        }
        
        static parse_item1(item, obj, callback)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                freeverbTESTProcessor.parse_items(item.items, obj, callback);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Nothing
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                obj.push({ name: item.address,
                         defaultValue: item.init,
                         minValue: item.min,
                         maxValue: item.max });
            }
        }
        
        static parse_item2(item, obj, callback)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                freeverbTESTProcessor.parse_items(item.items, obj, callback);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputs_items.push(item.address);
                obj.pathTable[item.address] = parseInt(item.index);
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputs_items.push(item.address);
                obj.pathTable[item.address] = parseInt(item.index);
            }
        }
     
        static get parameterDescriptors() 
        {
            // Analyse JSON to generate AudioParam parameters
            var params = [];
            freeverbTESTProcessor.parse_ui(JSON.parse(\`JSON_STR\`).ui, params, freeverbTESTProcessor.parse_item1);
            return params;
        }
       
        constructor(options)
        {
            super(options);
            this.running = true;
            
            const importObject = {
                    env: {
                        memoryBase: 0,
                        tableBase: 0,

                        // Integer version
                        _abs: Math.abs,

                        // Float version
                        _acosf: Math.acos,
                        _asinf: Math.asin,
                        _atanf: Math.atan,
                        _atan2f: Math.atan2,
                        _ceilf: Math.ceil,
                        _cosf: Math.cos,
                        _expf: Math.exp,
                        _floorf: Math.floor,
                        _fmodf: function(x, y) { return x % y; },
                        _logf: Math.log,
                        _log10f: Math.log10,
                        _max_f: Math.max,
                        _min_f: Math.min,
                        _remainderf: function(x, y) { return x - Math.round(x/y) * y; },
                        _powf: Math.pow,
                        _roundf: Math.fround,
                        _sinf: Math.sin,
                        _sqrtf: Math.sqrt,
                        _tanf: Math.tan,
                        _acoshf: Math.acosh,
                        _asinhf: Math.asinh,
                        _atanhf: Math.atanh,
                        _coshf: Math.cosh,
                        _sinhf: Math.sinh,
                        _tanhf: Math.tanh,

                        // Double version
                        _acos: Math.acos,
                        _asin: Math.asin,
                        _atan: Math.atan,
                        _atan2: Math.atan2,
                        _ceil: Math.ceil,
                        _cos: Math.cos,
                        _exp: Math.exp,
                        _floor: Math.floor,
                        _fmod: function(x, y) { return x % y; },
                        _log: Math.log,
                        _log10: Math.log10,
                        _max_: Math.max,
                        _min_: Math.min,
                        _remainder:function(x, y) { return x - Math.round(x/y) * y; },
                        _pow: Math.pow,
                        _round: Math.fround,
                        _sin: Math.sin,
                        _sqrt: Math.sqrt,
                        _tan: Math.tan,
                        _acosh: Math.acosh,
                        _asinh: Math.asinh,
                        _atanh: Math.atanh,
                        _cosh: Math.cosh,
                        _sinh: Math.sinh,
                        _tanh: Math.tanh,

                        table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
                    }
            };
            
            this.freeverbTEST_instance = new WebAssembly.Instance(options.processorOptions.wasm_module, importObject);
            this.json_object = JSON.parse(options.processorOptions.json);
         
            this.output_handler = function(path, value) { this.port.postMessage({ path: path, value: value }); };
            
            this.ins = null;
            this.outs = null;

            this.dspInChannnels = [];
            this.dspOutChannnels = [];

            this.numIn = parseInt(this.json_object.inputs);
            this.numOut = parseInt(this.json_object.outputs);

            // Memory allocator
            this.ptr_size = 4;
            this.sample_size = 4;
            this.integer_size = 4;
            
            this.factory = this.freeverbTEST_instance.exports;
            this.HEAP = this.freeverbTEST_instance.exports.memory.buffer;
            this.HEAP32 = new Int32Array(this.HEAP);
            this.HEAPF32 = new Float32Array(this.HEAP);

            //console.log(this.HEAP);
            //console.log(this.HEAP32);
            //console.log(this.HEAPF32);

            // bargraph
            this.outputs_timer = 5;
            this.outputs_items = [];

            // input items
            this.inputs_items = [];
        
            // Start of HEAP index

            // DSP is placed first with index 0. Audio buffer start at the end of DSP.
            this.audio_heap_ptr = parseInt(this.json_object.size);

            // Setup pointers offset
            this.audio_heap_ptr_inputs = this.audio_heap_ptr;
            this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);

            // Setup buffer offset
            this.audio_heap_inputs = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
            this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * NUM_FRAMES * this.sample_size);
            
            // Start of DSP memory : DSP is placed first with index 0
            this.dsp = 0;

            this.pathTable = [];
         
            // Send output values to the AudioNode
            this.update_outputs = function ()
            {
                if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                    this.outputs_timer = 5;
                    for (var i = 0; i < this.outputs_items.length; i++) {
                        this.output_handler(this.outputs_items[i], this.HEAPF32[this.pathTable[this.outputs_items[i]] >> 2]);
                    }
                }
            }
            
            this.initAux = function ()
            {
                var i;
                
                if (this.numIn > 0) {
                    this.ins = this.audio_heap_ptr_inputs;
                    for (i = 0; i < this.numIn; i++) {
                        this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((NUM_FRAMES * this.sample_size) * i);
                    }
                    
                    // Prepare Ins buffer tables
                    var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                    for (i = 0; i < this.numIn; i++) {
                        this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + NUM_FRAMES * this.sample_size) >> 2);
                    }
                }
                
                if (this.numOut > 0) {
                    this.outs = this.audio_heap_ptr_outputs;
                    for (i = 0; i < this.numOut; i++) {
                        this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((NUM_FRAMES * this.sample_size) * i);
                    }
                    
                    // Prepare Out buffer tables
                    var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                    for (i = 0; i < this.numOut; i++) {
                        this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + NUM_FRAMES * this.sample_size) >> 2);
                    }
                }
                
                // Parse UI
                freeverbTESTProcessor.parse_ui(this.json_object.ui, this, freeverbTESTProcessor.parse_item2);
                
                // Init DSP
                this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
            }

            this.setParamValue = function (path, val)
            {
                this.HEAPF32[this.pathTable[path] >> 2] = val;
            }

            this.getParamValue = function (path)
            {
                return this.HEAPF32[this.pathTable[path] >> 2];
            }

            // Init resulting DSP
            this.initAux();
        }
        
        process(inputs, outputs, parameters) 
        {
            var input = inputs[0];
            var output = outputs[0];
            
            // Check inputs
            if (this.numIn > 0 && (!input || !input[0] || input[0].length === 0)) {
                //console.log("Process input error");
                return true;
            }
            // Check outputs
            if (this.numOut > 0 && (!output || !output[0] || output[0].length === 0)) {
                //console.log("Process output error");
                return true;
            }
            
            // Copy inputs
            if (input !== undefined) {
                for (var chan = 0; chan < Math.min(this.numIn, input.length); ++chan) {
                    var dspInput = this.dspInChannnels[chan];
                    dspInput.set(input[chan]);
                }
            }
            
            /*
            TODO: sample accurate control change is not yet handled
            When no automation occurs, params[i][1] has a length of 1,
            otherwise params[i][1] has a length of NUM_FRAMES with possible control change each sample
            */
            
            // Update controls
            for (const path in parameters) {
                const paramArray = parameters[path];
                this.setParamValue(path, paramArray[0]);
            }
        
          	// Compute
            try {
                this.factory.compute(this.dsp, NUM_FRAMES, this.ins, this.outs);
            } catch(e) {
                console.log("ERROR in compute (" + e + ")");
            }
            
            // Update bargraph
            this.update_outputs();
            
            // Copy outputs
            if (output !== undefined) {
                for (var chan = 0; chan < Math.min(this.numOut, output.length); ++chan) {
                    var dspOutput = this.dspOutChannnels[chan];
                    output[chan].set(dspOutput);
                }
            }
            
            return this.running;
    	}
        
        handleMessage(event)
        {
            var msg = event.data;
            switch (msg.type) {
                case "destroy": this.running = false; break;
            }
        }
    }

    // Globals
    const NUM_FRAMES = 128;
    try {
        registerProcessor('freeverbTEST', freeverbTESTProcessor);
    } catch (error) {
        console.warn(error);
    }
`;

const dspName = "freeverbTEST";

// WAP factory or npm package module
if (typeof module === "undefined") {
    window.freeverbTEST = freeverbTEST;
    window.FaustfreeverbTEST = freeverbTEST;
    window[dspName] = freeverbTEST;
} else {
    module.exports = { freeverbTEST };
}
