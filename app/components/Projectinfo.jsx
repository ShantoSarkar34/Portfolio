
import React from "react";

function Projectinfo() {
  return (
    <section className="h-[22rem] w-full customeBg bg-black">
      <div className="mx-[15rem]">

        {/* info text - start  */}

        <div className="pt-[8rem] flex justify-between">
          <div>
            <h1 className="text-[50px] font-bold text-white text-center tracking-[1px]">
              555
            </h1>
            <p className="text-[25px] font-semibold text-white">
              Happy Clients
            </p>
          </div>

          <div>
            <h1 className="text-[50px] font-bold text-white text-center tracking-[1px]">
              222
            </h1>
            <p className="text-[25px] font-semibold text-white">
              Projects Finished
            </p>
          </div>

          <div>
            <h1 className="text-[50px] font-bold text-white text-center tracking-[1px]">
              444
            </h1>
            <p className="text-[25px] font-semibold text-white">Awards Won</p>
          </div>

          <div>
            <h1 className="text-[50px] font-bold text-white text-center tracking-[1px]">
              777
            </h1>
            <p className="text-[25px] font-semibold text-white">
              Drinked Pepsi
            </p>
          </div>
        </div>

        {/* info text - end */}
        
      </div>
    </section>
  );
}

export default Projectinfo;
