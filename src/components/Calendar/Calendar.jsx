import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import ru from "date-fns/locale/ru";
import { useState } from 'react';

export default function Calendar() {
  const [selected, setSelected] = useState();

  let footer = <p>Выберите срок исполнения.</p>;
  if (selected) {
    footer = <p>Вы выбрали{format(selected, 'PP', {lokale: ru})}.</p>;
  }
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
    />
  );
}
