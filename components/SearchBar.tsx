import { useRef } from 'react';
import styles from './SearchBar.module.css';

type SearchBarProps = {
  onSearch: (city: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchClick = () => {
    if (inputRef.current) {
      onSearch(inputRef.current.value);
    }
  };

  return (
    <div className={styles.searchBar}>
      <input ref={inputRef} type="text" placeholder="都市名を入力" />
      <button onClick={handleSearchClick}>検索</button>
    </div>
  );
};

export default SearchBar;
