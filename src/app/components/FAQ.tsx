import * as React from 'react';

import { cn } from '@/lib/utils';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: 'What is Unit Events?',
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    question: 'How can I purchase tickets for your events?',
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    question: 'Do you offer refunds or exchanges for event tickets?',
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    question: 'Do you provide accommodation for attendees?',
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
];

interface Props extends React.HTMLProps<HTMLDivElement> {
  className?: string;
}

const FAQ = React.forwardRef<HTMLDivElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <section
        className={cn(
          'flex w-full flex-col gap-y-12 px-8 lg:px-48 xl:px-72 2xl:px-96',
          className,
        )}
        ref={ref}
        {...props}
      >
        <div className='flex flex-col gap-y-4'>
          <h2 className='text-2xl font-semibold md:text-3xl'>
            Frequently Asked Questions
          </h2>
        </div>
        <Separator />
        <Accordion type='single' collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger className={cn(index === 0 && 'pt-0')}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    );
  },
);

export default FAQ;
