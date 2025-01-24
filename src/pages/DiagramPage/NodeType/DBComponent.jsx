import React from 'react'

export const DBComponent = ({ atributos, tipos, primaryKey, methods }) => {
    return (
        <div>
            <div className="bg-black text-white">
                
                {atributos?.map((atributo, index) => (
                    <div key={index}>
                        {primaryKey[index] && "(pk) "}
                        {atributo}: {tipos[index]}
                    </div>
                ))}
            </div>
            <div className="text-black methods-section " style={{backgroundColor: "#F8E6BCFF" }}>
                {methods?.map((method, index) => (
                    <div key={index}>
                        {method.name}({method.params}): {method.returnType}
                    </div>
                ))}
            </div>
        </div>
    );
};
