import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { NavHeader } from '../components';

export const ReportProblemForm = () => {
  const [state, handleSubmit] = useForm('xrgvvznv');
  const [section, setSection] = useState('');
  const [name, setName] = useState('');

  if (state.succeeded) {
    return <p>Thanks for sharing your feedback!</p>;
  }

  return (
    <>
      <NavHeader>Report a Problem</NavHeader>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Your Name: </label>
          <input
            className="input-item"
            id="name"
            name="name"
            type="text"
            value={+name ? '' : name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Smith"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="section">Issues with Section: </label>
          <select
            className="input-item"
            id="section"
            name="section"
            value={section}
            onChange={(e) => setSection(e.target.value)}
          >
            <option value={'measurement'}>Measurement Units</option>
            <option value={'weakPoint'}>Weak Point Calculator</option>
            <option value={'sinkerBar'}>Sinker Bar Weight Calculator</option>
            <option value={'cableStretch'}>Cable Stretch Calculator</option>
            <option value={'maxTension'}>Max. Tension at Depth</option>
            <option value={'casingTubing'}>Casing Tubing Specs</option>
            <option value={'tempCorrLength'}>Temp. Corrected Length</option>
          </select>
        </div>
        <div className="input-group">
          <textarea
            id="message"
            name="message"
            placeholder="Problem with any calculation?"
            className="input-item textearea"
            rows={8}
            required
          />
        </div>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <div className="input-group">
          <button className="button" type="submit" disabled={state.submitting}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};
