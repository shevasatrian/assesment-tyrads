import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {

  const data = [
    {
      id: 1,
      path: '/cards.png',
      name: 'Cards',
    },
    {
      id: 2,
      path: '/send-money.png',
      name: 'Send Money',
    },
    {
      id: 3,
      path: '/tasks.png',
      name: 'Tasks',
    },
    {
      id: 4,
      path: '/history.png',
      name: 'History',
    },
    {
      id: 5,
      path: '/users.png',
      name: 'Users',
    },
    {
      id: 6,
      path: '/documents.png',
      name: 'Documents',
    },
  ]

  const data2 = [
    {
      id: 1,
      path: '/tasks-2.png',
      name: 'Tasks',
    },
    {
      id: 2,
      path: '/cards.png',
      name: 'Payments',
    },
    {
      id: 3,
      path: '/projects.png',
      name: 'Projects',
    },
  ]

  return (
    <>
    <div className="sidebar">
      <h2 className="title">Sheva</h2>
      <ul>
        <li>
          <div className="menu-item">
            <Image className="dashboard-img-active" src="/home.png" width={25} height={25} />
            <h4><Link href="/" className="menu-item-link">dashboard</Link></h4>
          </div>
        </li>
        {data.map((item) => (
          <li>
            <div className="menu-item">
              <Image className="dashboard-img" src={item.path} width={25} height={25} />
              <h4><Link href="/" className="menu-item-link">{item.name}</Link></h4>
            </div>
          </li>
        ))}
        <br/>
        <hr/>
        <br/>
        {data2.map((item) => (
          <li>
            <div className="menu-item">
              <Image className="dashboard-img" src={item.path} width={25} height={25} />
              <h4><Link href="/" className="menu-item-link">{item.name}</Link></h4>
            </div>
          </li>
        ))}
        {/* Tambahkan menu-item sesuai kebutuhan */}
      </ul>
    </div>
    </>
  )
}