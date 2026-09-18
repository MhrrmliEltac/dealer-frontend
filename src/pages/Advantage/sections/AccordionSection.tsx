import { API_BASE_URL } from "@/api/api";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { useAdvantageQuery } from "@/queries/advantage.queries";
import type { Advantage } from "@/services/advantage.service";

const AccordionSection = () => {
  const { data: advantageData } = useAdvantageQuery();

  return (
    <section className="flex justify-center items-center w-full mb-20">
      <div className="relative w-full max-w-360 mx-auto">
        <Card className="w-full p-24">
          {advantageData?.map((advantage: Advantage, index: number) => (
            <Accordion key={advantage.id}>
              <AccordionItem>
                <AccordionTrigger>
                  <div className="flex gap-24.5">
                    <span className="text-[45px]">0{index + 1}</span>
                    <p className="text-[40px] text-[#FF6200] font-bold">
                      {advantage.title}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex justify-between gap-12">
                    <div className="flex w-full justify-between gap-24.5">
                      <div className="max-w-[43.09px] w-full" />
                      <p className="text-[25px] text-[#A5A5A5] font-normal ">
                        {advantage.description}
                      </p>
                    </div>
                    <img
                      src={`${API_BASE_URL}${advantage.image}`}
                      alt={advantage.title}
                      className="max-w-122.75 w-full h-85 rounded-[36px]"
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </Card>
      </div>
    </section>
  );
};

export default AccordionSection;
