import ArrowDown from "@/assets/icons/ArrowDown";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const calculationData = [
  {
    id: 1,
    title: "IAAI",
  },
  {
    id: 2,
    title: "Port",
  },
  {
    id: 3,
    title: "Poti",
  },
  {
    id: 4,
    title: "Savannah (GA)",
  },
  {
    id: 5,
    title: "Vehicle",
  },
];

const CalculationPage = () => {
  return (
    <section className="flex flex-wrap justify-between items-center gap-4 px-4 sm:px-8 lg:px-16 py-3 lg:py-0 lg:h-29.25 max-w-360 mx-auto min-h-screen">
      <Card className="w-full py-13 px-16.25">
        <CardHeader>
          <CardTitle>Calculation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-4">
              {calculationData.map((data) => (
                <Button
                  key={data.id}
                  role="link"
                  className="flex justify-between items-center bg-black rounded-[10px] pl-8 pr-3.5 py-3 h-full w-full max-w-102.5"
                >
                  <span className="text-white text-3xl">{data.title}</span>
                  <div className="flex items-center justify-center p-3.25 border-2 border-[#FF6200] rounded-[10px] bg-white">
                    <ArrowDown />
                  </div>
                </Button>
              ))}
            </div>
            <div className="max-w-87.5 w-full h-full flex flex-col gap-5.5">
              <div className="bg-black w-full max-w-87.5 h-77 rounded-[10px] flex justify-center items-center relative">
                <span className="text-[90px] text-[#FF6200] font-bold">
                  389
                </span>
                <span className="absolute bottom-5 font-medium text-[30px]">
                  USD
                </span>
              </div>
              <Button className="rounded-[10px] h-17.5 bg-[#FF6200]">
                <span className="text-[30px] text-white font-bold">
                  Hesabla
                </span>
              </Button>
            </div>
            <div className="max-w-87.75 w-full h-full">
              <img src="/carfax_image.jpg" alt="carfax_image" className="rounded-[10px]" />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default CalculationPage;
