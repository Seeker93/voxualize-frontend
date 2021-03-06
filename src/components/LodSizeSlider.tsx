
import React from 'react'
import { Slider } from "@blueprintjs/core";
import { observer } from 'mobx-react'

export const LodSizeSlider = observer((props: any) => {
    const { localState } = props //import shared state from props
    // Adjusting the slider sets the state variable

    const onSizeChangeRelease = (value: number) => {
        localState.setLodMemorySize(value)
    }
    
    return (
        <div className={"text-white flex-start"}>
            <h6 className="text-light mb-3">Select cube memory size (mb)</h6>
            <Slider
                min={0}
                max={100}
                stepSize={1}
                value={localState.lodMemorySize || 0} // Slider value is always set to the shared state variable
                labelPrecision={0}
                className={"mb-3"}
                onChange={(value:number)=>localState.setLodMemorySize(value)}
                onRelease={(value: number) => onSizeChangeRelease(value)} // Function that's called when you change the value
                labelStepSize={10}
                vertical={false}
            />
        </div>


    );

})