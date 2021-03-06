import React from 'react';

const SuTiau = ({ 換音檔, 資料, toh }) => (
    <tr className={toh ? "positive" : ''}>
        <td>{資料.語詞編號}</td>
        <td className="selectable"
          onClick={換音檔.bind(this, 資料.語詞編號, 'Kaxabu', 資料.噶哈巫語教材標記法)}
          >{資料.噶哈巫語教材標記法}</td>
        <td className="selectable" onClick={換音檔.bind(this, 資料.語詞編號, 'Kaxabu', 資料.噶哈巫語潘永歷標記法)}
          >{資料.噶哈巫語潘永歷標記法}</td>
        <td className="selectable" onClick={換音檔.bind(this, 資料.語詞編號, '華語', 資料.中文譯解)}
          >{資料.中文譯解}</td>
        <td className="selectable" onClick={換音檔.bind(this, 資料.語詞編號, '臺語', 資料.臺語譯解)}
          >{資料.臺語譯解}</td>
        <td>{資料.備註}</td>
        <td>{資料.出處}</td>
    </tr>
)

export default SuTiau