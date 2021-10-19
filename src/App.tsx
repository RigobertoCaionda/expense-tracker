import {useState, useEffect} from 'react';
import * as C from './App.styles';
import {Item} from './types/Item';
import {Category} from './types/Category';
import {categories} from './data/categories';
import {items} from './data/Items';
import {getCurrentMonth, filterListByMonth} from './helpers/dateFilters';
import {TableArea} from './components/TableArea';
import {InfoArea} from './components/InfoArea';
import {InputArea} from './components/InputArea';
const App = () => {
  const [list, setList] = useState(items);//Como o items ja vem tipado de la do dat/Items, entao nao preciso mais tipar
  const [filteredList, setFilteredList] = useState<Item[]>([]);//Como esse array e vazio (Quer dizer que nao esta tipado), entao eu preciso sim tipar ela, no array acima nao precisou pq ja veio com items tipados. Aqui vem a nova lista ja filtrada com o mes e ano escolhido
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());//Aqui em currentMonth esta vindo algo assim 2021-10(ano-mes)
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(()=>{
    setFilteredList(filterListByMonth(list, currentMonth));//Retorna um array de items filtrados ja
  },[list, currentMonth]);//Quando o mes muda ele traz uma nova lista...

  useEffect(()=>{
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount+= filteredList[i].value;//Somando despesas
      } else {
          incomeCount += filteredList[i].value;//somando receitas
      }
      setIncome(incomeCount);
      setExpense(expenseCount);
    }
  },[filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const hndleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  return (
      <C.Container>
        <C.Header>
          <C.HeaderText>Sistema financeiro</C.HeaderText>
        </C.Header>
        <C.body>
          <InfoArea currentMonth={currentMonth} 
            onMonthChange={handleMonthChange} 
              income={income}
                expense={expense}/>
          <InputArea onAdd={hndleAddItem} />
          <TableArea list={filteredList}/>
        </C.body>
      </C.Container>
    );
}
export default App;