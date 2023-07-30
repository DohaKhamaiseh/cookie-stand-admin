export default function ReportTable({ rps, Hours ,setLocations}) {
    let totals_location = 0
    if (rps.length != 0) {
        for (var i of rps[0].hourly_sales) {
            totals_location += i
        }
    }
    let totals_time = 0
    console.log(rps.length)


    function deleteHandler(idx){
        let newLoc = [...rps]
        if (idx < newLoc.length) {
            newLoc.splice(idx, 1);
          setLocations(newLoc)

        }
      }

    return (
        <div className="mb-10 text-xl ml-70 font-mono flex flex-col justify-around" >
            <div className="flex flex-col mb-10 text-xl ml-70 font-mono">
                {rps.length !== 0 ? (
                    <>
                        <table className="w-1/2 mx-auto my-8 text-2xl text-center">
                            <thead>
                                <tr className=" bg-gray-300">
                                    <th className="px-3">Location</th>
                                    {Hours.map(item => (
                                        <th className="px-2">{item}</th>
                                    ))}
                                    <th> Totals </th>


                                </tr>
                            </thead>
                            <tbody>
                                {rps.map((item,idx) => (
                                    <tr className=" bg-gray-100">
                                      <td className="border border-black flex items-center">
    <span>{item.Location}</span>
    <button className="flex items-center justify-center w-10 h-10 rounded-full" onClick={() => deleteHandler(idx)}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
    </svg>
</button>

</td>


                                        {item.hourly_sales.map(item => (
                                            <td className="border border-black">{item}</td>
                                        ))}

                                        <td className="border border-black">{totals_location}</td>

                                    </tr>
                                ))

                                }
                            </tbody>

                            <tfoot>

                                <tr className=" bg-gray-300">
                                    <th className="border border-black">Totals</th>


                                    {rps[0].hourly_sales.map(item2 => {
                                           
                                              totals_time +=  item2 * rps.length
                                        return (
                                            <>
                                            <th className="border border-black">{item2 * rps.length}</th>

                                            </>
                                        )
                                    }


                                        
                                    )}

                                    <th className="border border-black"> {totals_time}</th>




                                </tr>
                            </tfoot>
                        </table>

                    </>
                ) : (
                    <h2> Add Cookie Stands Available </h2>
                )}
            </div>
        </div>
    )
}