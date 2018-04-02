# Redux Rounding Out


## Redux Organization

### Type-based organization

```
store.js
constants.js (// export const ADD_USER = "ADD_USER")
/actionCreators
  |
   L authActions.js 
   L roomsActions.js
/reducers
  |
   L authReducer.js
   L roomsReducer.js
```

### Ducks (by entity)

```
store.js
/reducers
   |
    L auth.js (constants, action creators, reducer)
    L rooms.js (constants, action creators, reducer)
```
