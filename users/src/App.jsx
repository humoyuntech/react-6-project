import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

function App() {
  const [users, setUsers] = React.useState([]);
  const [invites, setInvites] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [success, setSuccess] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(res => res.json())
       .then((json) => {
        setUsers(json.data)
    }).catch((error)=> {
      console.warn(error);
      alert('xato')
    }).finally(()=> {
      setLoading(false);
    })
  }, []);

  const onChangeSearchvalue = (event) => {
    setSearchValue(event.target.value)
  }

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites(prev => prev.filter(_id => id !== id))
    }else {
      setInvites((prev)=> [...prev, id]);
    }
  }

  const onClickSendInvites = () => {
    setInvites(true);
  }

  return (
    <div className="App">
      {success ? (<Success count={invites.length} />) : (
            <Users
              onChangeSearchvalue={onChangeSearchvalue}
              searchValue={searchValue}
              items={users}
              isLoading={isLoading}
              invites={invites}
              onClickInvite={onClickInvite}
              onClickSendInvites={onClickSendInvites}
            />
      )}
    </div>
  );
}

export default App;
