import { useMemo } from "react";
import DataTable from "./DataTable";
import "./styles.css";

export default function App() {
  const data = [
    {
      id: 1,
      name: "A"
    },
    {
      id: 2,
      name: "B"
    },
    {
      id: 1,
      name: "A"
    },
    {
      id: 2,
      name: "B"
    },
    {
      id: 1,
      name: "A"
    },
    {
      id: 2,
      name: "B"
    },
    {
      id: 1,
      name: "A"
    },
    {
      id: 2,
      name: "B"
    },
    {
      id: 1,
      name: "A"
    },
    {
      id: 2,
      name: "B"
    },
    {
      id: 1,
      name: "A"
    },
    {
      id: 2,
      name: "B"
    },
    {
      id: 1,
      name: "A"
    },
    {
      id: 2,
      name: "B"
    }
  ];
  const columns = [
    {
      name: "ID",
      key: "id"
    },
    {
      name: "Name",
      key: "name"
    }
  ];
  return (
    <div className="App">
      <DataTable data={data} columns={columns} />
    </div>
  );
}
