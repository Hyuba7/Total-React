import * as React from 'react';

function CustomDate() {
  let date:string = new Date().toDateString();
  return (
    <div>
      {date}
      <button>時間の取得</button>
    </div>
  );
}

export {
  CustomDate
}