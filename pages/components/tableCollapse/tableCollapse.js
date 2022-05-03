import Image from "next/image";
import styled from "styled-components";
import DataTable from "react-data-table-component";

const customStyles = {
  // https://github.com/jbetancur/react-data-table-component/blob/master/src/DataTable/styles.ts
  table: {
    style: {
      backgroundColor: "transparent",
    },
  },
  headRow: {
    style: {
      borderBottomWidth: "3px",
      borderBottomStyle: "solid",
      borderBottomColor: "#af47f1",
      fontSize: "1rem",
      fontWeight: "800",
    },
  },
  rows: {
    style: {
      "&:not(:last-of-type)": {
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",
        borderBottomColor: "#af47f1",
      },
    },
  },
  headCells: {
    style: {},
  },
  cells: {
    style: {
      fontSize: "1rem",
    },
  },
};

const ExpandedComponent = ({ data }) => (
  <div className="expandedContent">
    <div className="title">{data.title}</div>
    <p>{data.description}</p>
    <Image
      src={data.picture}
      alt="Picture of the author"
      width={300}
      height={200}
    />
  </div>
);

const columns = [
  {
    name: "Title",
    selector: (row) => row.text,
    sortable: true,
  },
  {
    name: "Link",
    selector: (row) => row.link,
  },
  {
    name: "Year",
    selector: (row) => row.year,
  },
  {
    name: "Location",
    selector: (row) => row.location,
  },
];

// var data_holder = [];
// for (var x = 0; x < items.length; x++) {
//   data_holder.push({
//     title: items[x].text,
//     descriotion: items[x].description,
//   });
// }

const S_post = styled.a`
  display: block;
`;

const TableCollapse = ({ items }) => {
  return (
    <div>
      <DataTable
        columns={columns}
        data={items}
        expandableRows
        expandOnRowClicked
        expandableRowsComponent={ExpandedComponent}
        customStyles={customStyles}
      />
    </div>
  );
};

export default TableCollapse;
