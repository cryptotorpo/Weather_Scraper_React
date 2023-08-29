import * as React from 'react'
import './table.css';
import { FaCheck, FaEdit,  } from 'react-icons/fa';
import { FiDelete } from 'react-icons/fi';

function ClaimDetails () {
    return (
        <div className="w-full text-center">
          <table className='w-full'>
            <tr className="w-full header">
              <th className='w-1/5'>Active Claims in your Area</th>
              <th className='w-1/5'>Date Registered</th>
              <th className='w-1/5'>Status</th>
              <th className='w-1/5'>Remaining time</th>
              <th className='w-1/5'>Feedback</th>
            </tr>
            <tr>
              <td>Neige</td>
              <td>19 août 2023</td>
              <td>Pending</td>
              <td>23h32min</td>
              <td className='flex items-center justify-center'><FaCheck /><FiDelete className="w-5 h-5 ml-5"/></td>
            </tr>
            <tr>
              <td>Vent</td>
              <td>20 août 2023 </td>
              <td>Pending</td>
              <td>6h04min</td>
              <td className='flex items-center justify-center'><FaCheck /><FiDelete className="w-5 h-5 ml-5"/></td>
            </tr>
            <tr>
              <td>Qualité de l'air</td>
              <td>21 août 2023 </td>
              <td>Pending</td>
              <td>00h10min</td>
              <td className='flex items-center justify-center'><FaCheck /><FiDelete className="w-5 h-5 ml-5"/></td>
            </tr>
          </table>
        </div>
    );
}

export default ClaimDetails;
