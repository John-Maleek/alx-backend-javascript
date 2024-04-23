export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(allEmployees) {
      return Object.entries(allEmployees).length;
    },
  };
}
