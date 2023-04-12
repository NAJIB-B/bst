import { Bar } from "react-chartjs-2";

const BarChart = ({ chartData }) => {
    return ( 
        <>
         <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Most Popular languages"
            },
            legend: {
              display: false
            },
            responsive: true,
          }
        }}
      />
        </>
     );
}
 
export default BarChart;