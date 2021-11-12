import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import { useEffect, useState } from 'react';

const lowSingleRangeMarks = [
  {
    value: 3,
    label: '3',
  },
  {
    value: 7,
    label: '7',
  },
  {
    value: 14,
    label: '14',
  },
];

const highSingleRangeMarks = [
  {
    value: 54,
    label: '54',
  },
  {
    value: 70,
    label: '70',
  },
];

export default function RangeInputsPage() {
  const [thousandInput, setThousandInput] = useState(1000);
  const [singleInput, setSingleInput] = useState(0);
  const [marks, setMarks] = useState(lowSingleRangeMarks);
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(thousandInput + singleInput);
  }, [singleInput, thousandInput]);

  useEffect(() => {
    if (thousandInput > 10000) {
      setMarks(highSingleRangeMarks);
      setSingleInput(54);
    }
    if (thousandInput < 10000) {
      setSingleInput(3);
      setMarks(lowSingleRangeMarks);
    }
  }, [thousandInput]);

  return (
    <div className="rangeSliderContainer">
      <Box sx={{ width: 400 }}>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <Slider
            getAriaLabel={() => 'thousand step range slider'}
            value={thousandInput}
            onChange={e => setThousandInput(e.target.value)}
            valueLabelDisplay="auto"
            color="secondary"
            name="thousand"
            min={1000}
            max={20000}
            step={1000}
            marks
          />
        </Stack>
        <span>
          Thousand input value: <b>{thousandInput}</b>
        </span>
        <br />
        <br />

        <Stack>
          <Slider
            getAriaLabel={() => 'single step range slider'}
            value={singleInput}
            onChange={e => setSingleInput(e.target.value)}
            valueLabelDisplay="auto"
            color="secondary"
            name="single"
            min={0}
            max={100}
            step={0}
            marks={marks}
          />
        </Stack>
        <br />
        <span>
          Single Input Value: <b>{singleInput}</b>
        </span>
      </Box>
      <br />
      <br />
      <hr />
      <p>
        Overall value is: <b>{value}</b>
      </p>
    </div>
  );
}
