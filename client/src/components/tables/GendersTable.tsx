import DeleteGender from "../../pages/gender/DeleteGender";
import EditGender from "../../pages/gender/EditGender";
import "./GendersTable.css";

const GendersTable = () => {
  return (
    <>
      <table className="table table-hover table-container table-bordered ">
        <thead>
          <tr>
            
            <th className="column">No.</th>
            <th>Gender</th>
            <th className="column">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Male</td>
            <div className="">
              <EditGender />
              <DeleteGender />
            </div>
          </tr>
          <tr>
            <td>2</td>
            <td>Female</td>
            <div className="">
              <EditGender />
              <DeleteGender />
            </div>
          </tr>
          <tr>
            <td>3</td>
            <td>Others</td>
            <div className="">
              <EditGender />
              <DeleteGender />
            </div>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default GendersTable;