import { useEffect, useState } from "react";
import { REVIEW_DATA } from "../mocks/constantData";


const StripDonor = () => {
    return (
        <section className="w-full px-32 py-10 flex items-center justify-between bg-zinc-200">
            {REVIEW_DATA.map(review => {
                return <div key={review.id} className="grid place-items-center gap-3">
                <img src={review.img} className="h-10"/>
                <h4 className="text-xl font-semibold">{review.name}</h4>
                <h5 className="text-xl font-bold">{review.number}</h5>
            </div>
            })}
        </section>
    );
}

export default StripDonor;
