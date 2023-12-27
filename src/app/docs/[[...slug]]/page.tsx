import React from 'react';

function page({params}:{params:{slug:string[]}}) {
  if (params.slug?.length===1){
    return (
      <div>
        Viewing docs for feature params {params.slug[0]}
      </div>
    );
  }
  else if (params.slug?.length===2){
    return (
      <div>
       Viewing docs for feature params {params.slug[0]} and {params.slug[1]}
      </div>
    );
  }
  return <div>Home pahe</div>
  
}

export default page;