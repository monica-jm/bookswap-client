import { Input } from 'antd';
import React from 'react';

const { Search } = Input;

function SearchField({onSearch, value}) {
    return (
      <div>
        <Search
          placeholder="input search text"
          onChange={onSearch}
          style={{ width: 600 }}
        />
      </div>
    );
}

export default SearchField
