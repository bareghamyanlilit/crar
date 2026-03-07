import Image from "next/image";

export function Home() {
  return (
    <div className="w-full bg-[#ffffff] h-screen text-[#011c44]">
      <div
        className=" grid gap-5 bg-cover bg-center  text-center  pt-50 pb-20"
        style={{
          backgroundImage: "url('/y.png')",
        }}
      >
        <h1 className="text-4xl font-bold">Վերջին Զանգ</h1>
        <p className="text-2xl">20 / 03 / 2026</p>
      </div>

      <div
        className=" py-30 bg-center bg-[#f7fdff]"
        //    style={{
        //     backgroundImage:"url('/hearth.jpg')"
        //   }}
      >
        <p className="text-center">
          Վարդգես Համազասպյանի անվան պետական քոլեջի ՀՏԱՀԾԱ մասնագիտության 4 - րդ
          կուրսի ուսանողները Ձեզ սիրով հրավիրում են իրենց վերջին զանգին
        </p>
      </div>

      <div className="bg-center content-center w-full bg-cover h-screen"
        style={{
          backgroundImage: "url('/x.jpg')",
        }}
      >
        <Image src="/two.jpg" alt="two" width={500} height={500} 
        className="w-full"/>
      </div>

      <p>Վայր ։ Վարդգես Համազասպյանի անվան պետական քոլեջ</p>
    </div>
  );
}
