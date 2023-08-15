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
            </div>
        </>
    )
}