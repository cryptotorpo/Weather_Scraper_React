import * as React from 'react'
import './table.css';
import { FaCalendar, FaEdit } from 'react-icons/fa';

function ClaimDetails () {
    return (
        <div className="w-full text-center">
          <table className='w-full'>
            <tr className="w-full header">
              <th className='w-1/5'>Claim ID</th>
              <th className='w-1/5'>Claim Type</th>
              <th className='w-1/5'>Client Name</th>
              <th className='w-1/5'>Client Address</th>
              <th className='w-1/5'>Actions</th>
            </tr>
            <tr>
              <td>02</td>
              <td>Rain Damage</td>
              <td>Client 1</td>
              <td>2010 Random Street</td>
              <td className='flex items-center justify-center'><FaCalendar /><FaEdit className="w-5 h-5 ml-5"/></td>
            </tr>
            <tr>
              <td>03</td>
              <td>Snow Damage</td>
              <td>Client 3</td>
              <td>2013 Random Street</td>
              <td className='flex items-center justify-center'><FaCalendar /><FaEdit className="w-5 h-5 ml-5"/></td>
            </tr>
            <tr>
              <td>05</td>
              <td>Freeze Damage</td>
              <td>Client 7</td>
              <td>6164 Another Street</td>
              <td className='flex items-center justify-center'><FaCalendar /><FaEdit className="w-5 h-5 ml-5"/></td>
            </tr>
            <tr>
              <td>06</td>
              <td>Freeze Damage</td>
              <td>Client 7</td>
              <td>6164 Another Street</td>
              <td className='flex items-center justify-center'><FaCalendar /><FaEdit className="w-5 h-5 ml-5"/></td>
            </tr>
            <tr>
              <td>07</td>
              <td>Freeze Damage</td>
              <td>Client 7</td>
              <td>6164 Another Street</td>
              <td className='flex items-center justify-center'><FaCalendar /><FaEdit className="w-5 h-5 ml-5"/></td>
            </tr>
            <tr>
              <td>08</td>
              <td>Freeze Damage</td>
              <td>Client 7</td>
              <td>6164 Another Street</td>
              <td className='flex items-center justify-center'><FaCalendar /><FaEdit className="w-5 h-5 ml-5"/></td>
            </tr>
          </table>
        </div>
    );
}

export default ClaimDetails;
