import Image from "next/image"

export default function SecondContent() {
  return (
    <>
      <div className="content-second">
        <div className="profil">
          <button className="transaction-button" type="button">Transactions</button>
          <div className="vertical-line"></div>
          <div className="notification-circle">
            <Image src="/notification.png" width={25} height={25} />
          </div>
          <Image className="profile-image" src="/profile.png" width={50} height={50} />
        </div>
        <div className="box-2">
          <div className="box-child">
            <div className="circle">
              <Image className="box-img" src="/shopping.png" width={20} height={20} />
            </div>
            <h4 className="text-box">$ 1.300,90</h4>
            <h5 className="text-box-2">Shopping</h5>
          </div>
          <div className="box-child">
            <div className="circle">
              <Image className="box-img" src="/games.png" width={20} height={20} />
            </div>
            <h4 className="text-box">$ 1.000,00</h4>
            <h5 className="text-box-2">Games</h5>
          </div>
          <div className="box-child">
            <div className="circle">
              <Image className="box-img" src="/travelling.png" width={20} height={20} />
            </div>
            <h4 className="text-box">$ 6.700,90</h4>
            <h5 className="text-box-2">Travelling</h5>
          </div>
          <div className="box-child">
            <div className="box-content">
              <Image src="/box-content.jpg" layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>
        <div className="button-2">
          <button type="button" className="see-all-button">
            <span>See All</span>
            <Image src="/send-money.png" width={20} height={20} />
          </button>
        </div>
        <Image src="/graph-chart-2.jpg" width={250} height={330} />
      </div>
    </>
  )
}