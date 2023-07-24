export default function ReportTable({ reports, Hours }) {
    let totals_location = 0
    if (reports.length != 0) {
        for (var i of reports[0].hourly_sales) {
            totals_location += i
        }
    }
    let totals_time = 0

    return (
        <div className="mb-10 text-xl ml-70 font-mono flex flex-col justify-around" >
            <div className="flex flex-col mb-10 text-xl ml-70 font-mono">
                {reports.length !== 0 ? (
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
                                {reports.map(item => (
                                    <tr className=" bg-gray-100">
                                        <td className="border border-black">{item.Location}</td>

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


                                    {reports[0].hourly_sales.map(item2 => {
                                              totals_time +=  item2 * reports.length
                                        return (
                                            <>
                                            <th className="border border-black">{item2 * reports.length}</th>

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