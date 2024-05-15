'use client'
import { useState, useEffect } from 'react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    renderCalendar(currentDate);
  }, [currentDate]);

  const renderCalendar = (date: any) => {
    const calendarDaysElement = document.getElementById('calendarDays');
    if (!calendarDaysElement) return;

    calendarDaysElement.innerHTML = '';
    const month = date.getMonth();
    const year = date.getFullYear();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    document.getElementById('currentMonth')!.textContent = date.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });

    for (let i = 0; i < firstDay; i++) {
      const emptyCell = document.createElement('div');
      calendarDaysElement.appendChild(emptyCell);
    }

    for (let day = 1; day <= lastDate; day++) {
      const dayCell = document.createElement('div');
      dayCell.className = 'p-2 rounded cursor-pointer hover:bg-blue-100';
      dayCell.textContent = day.toString();
      dayCell.addEventListener('click', () => {
        dayCell.classList.toggle('bg-blue-200');
      });
      calendarDaysElement.appendChild(dayCell);
    }
  }

  const prevMonth = () => {
    const newDate = new Date(currentDate.setMonth(currentDate.getMonth() - 1));
    setCurrentDate(newDate);
  };

  const nextMonth = () => {
    const newDate = new Date(currentDate.setMonth(currentDate.getMonth() + 1));
    setCurrentDate(newDate);
  };

  return (
    <div className='flex flex-col items-center'>
      <h2 className=''>Faça sua reserva</h2>
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <div className="flex items-center justify-between mb-4">
          <button onClick={prevMonth} className="text-gray-500 hover:text-gray-700">&lt;</button>
          <h2 id="currentMonth" className="text-xl font-bold"></h2>
          <button onClick={nextMonth} className="text-gray-500 hover:text-gray-700">&gt;</button>
        </div>
        <div className="grid grid-cols-7 gap-2 text-center">
          <div className="font-bold">Dom</div>
          <div className="font-bold">Seg</div>
          <div className="font-bold">Ter</div>
          <div className="font-bold">Qua</div>
          <div className="font-bold">Qui</div>
          <div className="font-bold">Sex</div>
          <div className="font-bold">Sáb</div>
          <div id="calendarDays" className="col-span-7 grid grid-cols-7 gap-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
