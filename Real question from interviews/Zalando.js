// filter a lst of candidates from a express server req, res api method
const candaidtesFn = list => {
  const candidates = new Map()

  list.forEach(u => {
    candidates.set(u.id, u)
  });

  getUsers = Array.from(candidates.values())
  // console.log(getUsers[0].id)

  const test = [
    'wrong-12e0f277-skill1',
    'wrong-12e0f277-skill2',
  ]

  const filtered = getUsers.reduce((acc, u) => {
    console.log(u.skills)

    const matchSkills = u.skills.reduce((acc, s) => {
      console.log(test.indexOf(s) !== -1)
      return test.indexOf(s) !== -1 ? [...acc, s] : acc
    }, [])

    matchSkills
    return matchSkills.length > 0 ?
      [...acc, {...u, skills: matchSkills}].sort((a,b) => b.skills.length - a.skills.length) :
      acc
  }, [])

  console.log(filtered.length)
  console.log(filtered.map(a => a.skills.length))

  return filtered.length > 0 ? getUsers.get(filtered[0].id) : null
}

const users = [{
  id: 'wrong-12e0f277-f9f0-5486-9dd9-1d0ed90a83ef',
  name: 'Wrong candidate 12e0f277-f9f0-5486-9dd9-1d0ed90a83ef',
  skills: [
    'wrong-12e0f277-skill1',
    'wrong-12e0f277-skill2',
    'wrong-12e0f277-skill3',
    'wrong-12e0f277-skill4'
  ]
},
{
  id: '1df1487d-2579-5ffd-9fdf-1121bb2d4386',
  name: '1df1487d-2579-5ffd-9fdf-1121bb2d4386',
  skills: [
    'c79bb5df-906d-58c6-b406-350f083c5c66',
    'be98f0d7-ce8f-5eff-8d41-fb22301d8a58'
  ]
},
{
  id: 'f7155829-b32c-542d-9787-b81994327feb',
  name: 'f7155829-b32c-542d-9787-b81994327feb',
  skills: [
    'c79bb5df-906d-58c6-b406-350f083c5c66',
    'be98f0d7-ce8f-5eff-8d41-fb22301d8a58'
  ]
},
{
  id: 'c8ec9711-d12e-5800-8bf2-e33117753fe2',
  name: 'c8ec9711-d12e-5800-8bf2-e33117753fe2',
  skills: [
    'c79bb5df-906d-58c6-b406-350f083c5c66',
    'be98f0d7-ce8f-5eff-8d41-fb22301d8a58'
  ]
},
{
  id: 'wrong-d51bd5d0-43c6-52d6-9400-6dd6a23af6a9',
  name: 'Wrong candidate d51bd5d0-43c6-52d6-9400-6dd6a23af6a9',
  skills: [
    'wrong-12e0f277-skill1',
  ]
}]

candaidtesFn(users)

// write a autocomplete component from scratch
import React from 'react';
import classnames from 'classnames';
// you should import `lodash` as a whole module
import lodash from 'lodash';
import axios from 'axios';

const ITEMS_API_URL = 'https://example.com/api/items';
const DEBOUNCE_DELAY = 500;

const getQuery = q => axios.get(ITEMS_API_URL, { params: {q} })

// the exported component can be either a function or a class
class Autocomplete extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      results: [],
      isLoading: false
    }
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  // component
  handleUpdate(e) {
    // hoist query
    let query = e.target.value
    // set optimistic update
    this.setState({query})

    lodash.debounce(() => {
      this.setState({
        isLoading: true
      })
      // send query
      getQuery(query).then(res => {
        this.setState({
          results: res.data,
          isLoading: false
        })
      }).catch(e => {
        this.setState({
          isLoading: false,
          results: []
        })
      })
    }, DEBOUNCE_DELAY)()
  }

  render() {
    return (
      <div className="wrapper">
        <div className={classnames('control', {'is-loading': this.state.isLoading})}>
          <input type="text" className="input" value={this.state.query} onChange={this.handleUpdate}/>
        </div>
        { this.state.results.length > 0 && (
          <div className="list is-hoverable">
            { this.state.results.map(r =>
              <div className="list-item" onClick={() => this.props.onSelectItem(r)}>{r}</div>
            )}
          </div>
        )}
      </div>
    );
  }

}

export default Autocomplete