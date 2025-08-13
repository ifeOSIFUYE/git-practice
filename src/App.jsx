import { useEffect, useState } from 'react'
import './App.css'
// import contacts from './contacts'
// import contacts from './contacts.json'
// import tasks from './tasks';
// import { ContactList } from './components/ContactList';
// import { useDebounce } from './components/useDebounce';
// import { useFetchContacts } from './components/useFetchContacts';
import { DealsTable } from './components/DealsDashboard/DealsTable';
import { useFetchTableData } from './components/DealsDashboard/useFetchTableData';
import { SearchBar } from './components/DealsDashboard/SearchBar';
import { useDebounce } from './components/DealsDashboard/useDebounce';


function App() {
  const [query, setQuery] = useState('');
  const { isLoading, allDeals: deals, sortDealsByDate, sortAsc } = useFetchTableData();
  const debouncedQuery = useDebounce(query, 1000);

  const filteredDeals = deals.filter(deal => deal.name.toLowerCase().includes(debouncedQuery.toLowerCase()));

  return (
    <>
      <SearchBar query={query} setQuery={setQuery} />
      <DealsTable data={filteredDeals} isLoading={isLoading} handleClick={sortDealsByDate} sortAsc={sortAsc} />
    </>
  )
}

// function App() {
//   const [searchString, setSearchString] = useState('');
//   const debouncedQuery = useDebounce(searchString, 1000);
//   const { allContacts, isLoading } = useFetchContacts();
//   const filteredContacts = allContacts.filter((contact) => contact.name.toLowerCase().includes(debouncedQuery.toLowerCase()));

//   return (
//     <>
//       <header>
//         <input type="text" placeholder='search contacts by name' value={searchString} onChange={e => setSearchString(e.target.value)} />
//       </header>
//       <ContactList data={filteredContacts} isLoading={isLoading} />
//     </>
//   )
// }

// Task app
// function App() {
//   const [data, setData] = useState(tasks);
//   const [allTasks, setAllTasks] = useState([]);
//   const [newTask, setNewTask] = useState('');
//   const [selectedOption, setSelectedOption] = useState('all');
//   const filteredTasks = allTasks.filter(task => {
//     if (selectedOption === 'completed') return task.completed;
//     if (selectedOption === 'incomplete') return !task.completed;
//     return true;
//   });

//   useEffect(() => {
//     setAllTasks(data);
//   }, [data]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (newTask != '') {
//       setAllTasks(prev => [...prev, { id: Date.now(), title: newTask, completed: false }]);
//     }

//     setNewTask('');
//   }

//   const handleDelete = (id) => {
//     setAllTasks(prev => prev.filter(task => id != task.id));
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder='add a new task' value={newTask} onChange={e => setNewTask(e.target.value)} />
//         <button type="submit">add</button>
//       </form>
//       <select name='filter-options' defaultValue='all' value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
//         <option value="all">all</option>
//         <option value="completed">completed</option>
//         <option value="incomplete">incomplete</option>
//       </select>
//       <ul>
//         {filteredTasks.map(({ id, title, completed }) => {
//           return (<article key={id}>
//             <input type="checkbox" id={title} defaultChecked={completed} onChange={() => setAllTasks(prev => {
//               return prev.map(task => task.id === id ? { ...task, completed: !task.completed } : task)
//             })} />
//             <label htmlFor={title}>{title}</label>
//             <button onClick={() => handleDelete(id)}>delete</button>
//           </article>)
//         })}
//       </ul>
//     </>
//   )
// }

// Contacts app
// function App() {
//   const [allContacts, setAllContacts] = useState(contacts);
//   const [filterString, setFilterString] = useState('');
//   const [filteredData, setFilteredData] = useState(contacts);
//   const [sortAsc, setSortAsc] = useState(true);

//   useEffect(() => {
//     const newData = allContacts.filter(con => con.name.toLowerCase().includes(filterString.toLowerCase()));
//     setFilteredData(newData);
//   }, [filterString])


//   const handleSort = () => {
//     setFilteredData(prevData => [...prevData].sort((a, b) => sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)));
//     setSortAsc(!sortAsc);
//   }

//   return (
//     <>
//       <header>
//         <input type='text' placeholder='Search here...' value={filterString} onChange={(e) => setFilterString(e.target.value)} />
//         <button onClick={handleSort}>sort list {sortAsc ? 'A -> Z' : 'Z -> A'}</button>
//       </header>

//       <main className='cards'>
//         <>
//           {
//             filteredData.length ?
//               filteredData.map(con => {
//                 return <article className='card' key={con.id}>
//                   <header>{con.name}</header>
//                   <div className='content'>{con.email}</div>
//                 </article>
//               }) : <div>No contacts found.</div>
//           }
//         </>
//       </main>
//     </>
//   )
// }

export default App
