import { useEffect, useState, useRef } from "react";
export function useSearch() {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState(null);
  const firstInput = useRef(true);
  useEffect(() => {
    if (firstInput.current) {
      firstInput.current = search === "";
      return;
    }
    if (search.length === 0) {
      setError("Debes ingresar una búsqueda");
      return;
    }
    if (search.length <= 3) {
      setError("La búsqueda debe tener al menos 3 caracteres");
      return;
    }
    if (search.startsWith(" ")) {
      setError("La búsqueda no puede comenzar con espacio");
      return;
    } else {
      setError(null);
    }
  }, [search]);
  return { search, updateSearch, error };
}
