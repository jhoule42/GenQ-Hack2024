import { csvParse } from 'd3-dsv';

const parseCSV = (csvString: string) => {
    const data = csvParse(csvString);
    return data.map((row: any) => ({
      date: new Date(row['Date']),
      open: +row['Open'],
      high: +row['High'],
      low: +row['Low'],
      close: +row['Close'],
      volume: +row['Volume'],
      dividends: +row['Dividends'],
      splits: +row['Stock Splits'],
      capitalGains: +row['Capital Gains'],
      normalized: +row['Normalized'],
    }));
  };
  