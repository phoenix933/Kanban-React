const { useState } = require("react")

const StartUp = () => {
    const [state, setState] = useState('Heading here...')
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-4 flex-wrap">
                <div className="flex justify-center items-center w-40 h-40">
                    16
                </div>
                <div className="flex justify-center items-center w-40 h-40">
                    17
                </div>
                <div className="flex justify-center items-center w-40 h-40">
                    18
                </div>
                <div className="flex justify-center items-center w-40 h-40">
                    19
                </div>
                <div className="flex justify-center items-center w-40 h-40">
                    20
                </div>
                <div className="flex justify-center items-center w-40 h-40">
                    21
                </div>
            </div>
        </>
    )
}