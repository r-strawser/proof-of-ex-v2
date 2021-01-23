import React, { Component } from 'react'
import CloudUploadIcon      from '@material-ui/icons/CloudUpload'
import EmptyState           from 'components/EmptyState'
import { styles }           from './styles.scss'

import { Table }            from 'rimble-ui'

class LatestUploadsView extends Component {
  render() {
    return (
      <div className={styles}>
        <Table>
  <thead>
    <tr>
      <th>Transaction hash</th>
      <th>Value</th>
      <th>Recipient</th>
      <th>Time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0xeb...cc0</td>
      <td>0.10 ETH</td>
      <td>0x4fe...581</td>
      <td>January 14 2021 08:47:17 AM +UTC</td>
    </tr>
    <tr>
      <td>0xsb...230</td>
      <td>0.11 ETH</td>
      <td>0x4gj...1e1</td>
      <td>January 14 2021 08:52:17 AM +UTC</td>
    </tr>
    <tr>
      <td>0xed...c40</td>
      <td>0.12 ETH</td>
      <td>0x3fd...781</td>
      <td>January 14 2021 08:55:17 AM +UTC</td>
    </tr>
    <tr>
      <td>0xfg...7j8</td>
      <td>1.02 ETH</td>
      <td>0x9io...906</td>
      <td>January 14 2021 09:44:05 AM +UTC</td>
    </tr>
    <tr>
      <td>0xnj...b67</td>
      <td>0.27 ETH</td>
      <td>0x5gh...562</td>
      <td>January 14 2021 09:46:07 AM +UTC</td>
    </tr>
    <tr>
      <td>0xoa...5r1</td>
      <td>0.14 ETH</td>
      <td>0x5yp...781</td>
      <td>January 14 2021 09:56:46 AM +UTC</td>
    </tr>
  </tbody>
</Table>
        <EmptyState
          message="Latest Uploads"
          icon={<CloudUploadIcon />}
        />
      </div>
    )
  }
}

export default LatestUploadsView
