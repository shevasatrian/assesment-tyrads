import Image from "next/image"

export default function Content() {
  return (
    <>
     <div className="content">
        <div className="search-container">
          <h1>Dashboard</h1>
          <Image className="search-image" src="/search.png" width={25} height={25} />
          <input
            type="text"
            placeholder="Search"
            className="search-input"
          />
        </div>
        <div className="box-container">
          <div className="box">
            <Image src="/pie-chart.png" width={100} height={100} />
          </div>
          <div className="box">
            <div>
              <h2>$ 12.567,90</h2>
              <h4>Income</h4>
            </div>
          </div>
          <div className="box">
            <div>
              <h2>$ 5.879,90</h2>
              <h4>Expances</h4>
            </div>
          </div>
        </div>
        <div className="expances">
          <h2>Expances</h2>
          <Image className="graph-chart" src="/graph-chart.jpg" width={650} height={350} />
        </div>
        <div className="transaction">
          <h2>Transactions</h2>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Operation</th>
                  <th>Purpose</th>
                  <th>Number</th>
                  <th>Invoice</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Operation 1</td>
                  <td>Purpose 1</td>
                  <td>12345</td>
                  <td>ABC123</td>
                  <td>Active</td>
                </tr>
                <tr>
                  <td>Operation 2</td>
                  <td>Purpose 2</td>
                  <td>67890</td>
                  <td>DEF456</td>
                  <td>Inactive</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
     </div>
    </>
  )
}