import { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { DBComponent } from './DBComponent';

const DatabaseNode = ({ data }) => {
  const atributos=data.atributos;
  const tipos=data.tipos;
  const primaryKey=data.primaryKey;
  
  return (
    <>
      <div className='grid grid-rows text-center'>
        <div className='py-1'>{data.label}</div>
        <div className='px-1 bg-black'>          
          <DBComponent atributos={atributos} 
            tipos={tipos}
            primaryKey={primaryKey} 
            methods={data.methods} />
        </div>
        
      </div>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />

      <Handle type="target" position={Position.Right} id="r-target" isConnectable={true} />
      <Handle type="source" position={Position.Right} id="r-source" isConnectable={true} />

      <Handle type="target" position={Position.Top} id="t-target" isConnectable={true} />
      <Handle type="source" position={Position.Top} id="t-source" isConnectable={true} />
      
      <Handle type="target" position={Position.Bottom} id="b-target" isConnectable={true} />
      <Handle type="source" position={Position.Bottom} id="b-source" isConnectable={true} />

      <Handle type="target" position={Position.Left} id="l-target" isConnectable={true} />
      <Handle type="source" position={Position.Left} id="l-source" isConnectable={true} />


    </>
  );
};

export default memo(DatabaseNode);
