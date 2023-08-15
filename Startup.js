const { useState } = require("react")

const StartUp = () => {
    const [state, setState] = useState('Heading here...')
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-4 flex-wrap">
                <div className="flex justify-center items-center w-40 h-40">
                    1
                </div>
                <div className="flex justify-center items-center w-40 h-40">
                    2
                </div>                
                <div className="flex justify-center items-center w-40 h-40">
                    3
                </div>                
                <div className="flex justify-center items-center w-40 h-40">
                    4
                </div>                
                <div className="flex justify-center items-center w-40 h-40">
                    5
                </div>                
                <div className="flex justify-center items-center w-40 h-40">
                    6
                </div>                
                <div className="flex justify-center items-center w-40 h-40">
                    7
                </div>                
                <div className="flex justify-center items-center w-40 h-40">
                    8
                </div>                
                <div className="flex justify-center items-center w-40 h-40">
                    9
                </div>
                <div className="flex justify-center items-center w-40 h-40">
                    10
                </div>
                <div className="flex justify-center items-center w-40 h-40">
                    11
                </div>
                <div className="flex justify-center items-center w-40 h-40">
                    12
                </div>
                <div className="flex justify-center items-center w-40 h-40">
                    13
                </div>
            </div>
        </>
    )
}