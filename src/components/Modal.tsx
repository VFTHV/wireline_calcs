import { FC, Dispatch } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import { pathNames } from '../database/routes';

interface ModalProps {
  isOpen: boolean;
  onClose: Dispatch<React.SetStateAction<boolean>>;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose }) => {
  const targetElement = document.getElementById('modal-root');
  if (!isOpen || !targetElement) {
    return null;
  }
  const { pathname } = useLocation();
  const {
    units,
    weakpoint,
    weightbar,
    stretch,
    keyseat,
    tensionAtDepth,
    tempCorrLength,
    csgSpecs,
    cbl,
    feedback,
    disclaimer,
    fluidVelocity,
  } = pathNames;

  const renderText = () => {
    const textContent = {
      title: 'Sorry, no content',
      content: <p>Sorry, no content</p>,
    };
    if (pathname.includes(units)) {
      textContent.title = 'Measurement Units Help';
      textContent.content = (
        <>
          <p>
            Here you can change measurement units that you will be using for
            your calculations
          </p>
          <p>Output units will also be in the units of your preference</p>
          <p>
            This preference will be saved if used on the same device and browser
          </p>
        </>
      );
    } else if (pathname.includes(weakpoint)) {
      textContent.title = 'Weak Point Help';
      textContent.content = (
        <>
          <p>
            <strong>Step 1.</strong>
            Choose your cable type. If MANUAL cable selection is chosen, input
            OUTER BREAKING STRENGTH, WEIGHT IN AIR, MAX.RECOMMENDED TENSION
            manually
          </p>
          <p>
            <strong>Step 2.</strong>
            Choose Environment: FLUID or GAS. Cable weight is lighter in fluid
            than in gas
          </p>
          <p>
            <strong>Step 3.</strong>
            Input the Toolstring Weight to be used and planned maximum run in
            hole Depth
          </p>
          <div>
            <strong>Step 4.</strong>
            Calculator returns the following
            <ul className="styled-list">
              <li>TOTAL CABLE WEIGHT at maximum Depth</li>
              <li>
                MAX WEAKPOINT STRENGTH: maximum calculated tension to be applied
                at cablehead based on cable MAX. RECOMMENDED TENSION and maximum
                Depth
              </li>
              <li>
                NUMBER OF OUTER WIRES: amount of outer armors to be used for
                rehead at weakpoint
              </li>
              <li>
                TOOL WEIGHT % OF WEAKPOINT: how much toolstring weighs in
                relation to weakpoint strength indicated as percentage. If
                toolstring weighs more than 50% of weakpoint strength, it is a
                risk
              </li>
            </ul>
          </div>
        </>
      );
    } else if (pathname.includes(weightbar)) {
      textContent.title = 'Weight Bar Help';
      textContent.content = (
        <>
          <p>
            <strong>Step 1.</strong> Input cable diameter to be used in "Cable
            Diameter" input box
          </p>
          <p>
            <strong>Step 2.</strong> Input the wellhead pressure into the "Well
            Pressure" input box
          </p>
          <p>
            <strong>Step 3.</strong> Input the toolstring weight to be used into
            the "Tool Weight" input box
          </p>
          <p>
            <strong>Step 4.</strong> Input cable diameter to be used into the
            "Percent over Balance" input box
          </p>
          <div>
            <strong>Step 5.</strong>
            Calculator returns the following
            <ul className="styled-list">
              <li>
                BALANCE WEIGHT of the toolstring: it will neither be pushed out
                of the hole by pressure nor will be able to run in hole under
                it's weight
              </li>
              <li>
                FINAL WEIGHT: recommended total toolstring weight with added
                Percent over Balance weight
              </li>
              <li>
                SINKER BAR WEIGHT: additional weight required for the TOOL
                WEIGHT input box to reach the FINAL WEIGHT
              </li>
            </ul>
          </div>
          <p>
            <strong>Step 6.</strong> Additionally, weight bar database is
            available at the bottom of the page for your information
          </p>
        </>
      );
    } else if (pathname.includes(stretch)) {
      textContent.title = 'Cable Stretch Help';
      textContent.content = (
        <>
          <p>
            <strong>Step 1.</strong> Choose your cable type. If MANUAL cable
            selection is chosen, input CABLE STRETCH / (1Kft * 1Klbs) manually
          </p>
          <p>
            <strong>Step 2.</strong> Input the tension into the CURRENT TENSION
            input box
          </p>
          <p>
            <strong>Step 3.</strong> Input current depth into the DEPTH input
            box
          </p>
          <p>
            <strong>Step 4.</strong> Calculator returns the TOTAL CABLE STRETCH
            amount based on inputs above
          </p>
        </>
      );
    } else if (pathname.includes(tensionAtDepth)) {
      textContent.title = 'Max. Tension at Depth Help';
      textContent.content = (
        <>
          <p>
            <strong>Step 1.</strong> Choose your cable type. If MANUAL cable
            selection is chosen, input OUTER ARMOR BREAKING STRENGTH, INNER
            ARMOR BREAKING STRENGTH, CABLE WEIGHT IN AIR manually
          </p>
          <p>
            <strong>Step 2.</strong> Choose Environment: FLUID or GAS. Cable
            weight is lighter in fluid than in gas
          </p>
          <p>
            <strong>Step 3.</strong> Enter the Depth, Number of Outer Armors
            Used, Nuber of Inner Armors Used, Percent of Weak Point Breaking
            Strength into the appropriate input boxes
          </p>
          <div>
            <strong>Step 4.</strong>
            Calculator returns the following
            <ul className="styled-list">
              <li>
                CONSERVATIVE PULL: tension at surface required to pull indicated
                percentage of weak point. Safety factor of 0.8 is applied to
                this tension
              </li>
              <li>
                MAX PULL: tension at surface required to pull indicated
                percentage of weak point. No safety factor applied at this
                calculation
              </li>
            </ul>
          </div>
        </>
      );
    } else if (pathname.includes(feedback)) {
      textContent.title = 'Feedback Help';
      textContent.content = (
        <>
          <p>
            <strong>Report Any Issue.</strong> If you see any issue with
            calculations, page display, user interface responsiveness, error
            messages, data accuracy, feature functionality, or any other aspect
            of the application, please don't hesitate to let us know. Your
            feedback is invaluable in helping us improve the project and provide
            a better experience for all users
          </p>
          <p>
            <strong>Provide Feedback:</strong> We value your input and would
            love to hear your thoughts on this application. Whether you have
            suggestions for improvements, feature requests, or simply want to
            share what you like or dislike about the project, we appreciate all
            feedback. Your feedback helps us understand your needs better and
            allows us to continuously enhance the application to meet your
            expectations. Together, we can make this project even better!
          </p>
        </>
      );
    } else if (pathname.includes(disclaimer)) {
      textContent.title = 'Disclaimer Help';
      textContent.content = (
        <>
          <p>
            <strong>Report Any Issue.</strong> If you see any issue with
            calculations, page display, user interface responsiveness, error
            messages, data accuracy, feature functionality, or any other aspect
            of the application, please don't hesitate to let us know. Your
            feedback is invaluable in helping us improve the project and provide
            a better experience for all users
          </p>
          <p>
            <strong>Provide Feedback:</strong> We value your input and would
            love to hear your thoughts on this application. Whether you have
            suggestions for improvements, feature requests, or simply want to
            share what you like or dislike about the project, we appreciate all
            feedback. Your feedback helps us understand your needs better and
            allows us to continuously enhance the application to meet your
            expectations. Together, we can make this project even better!
          </p>
        </>
      );
    } else if (pathname.includes(csgSpecs)) {
      textContent.title = 'Casing Specs Help';
      textContent.content = (
        <p>
          <strong>API Casing Specs</strong> The API (American Petroleum
          Institute) casing sizes are standard measurements used in the oil and
          gas industry to specify the diameter and wall thickness of casings.
          These sizes are essential for ensuring compatibility and proper
          functioning of wellbore equipment.
        </p>
      );
    } else if (pathname.includes(tempCorrLength)) {
      textContent.title = 'Temp. Corrected Length Help';
      textContent.content = (
        <>
          <p>
            <strong>Step 1.</strong> Enter current environment temperature in
            degF or degC
          </p>
          <p>
            <strong>Step 2.</strong> Enter the total wireline resistance that
            you measured between cablehead and collector ring in Ohms
          </p>
          <p>
            <strong>Step 3.</strong> Choose the cable type you are using
          </p>
        </>
      );
    } else if (pathname.includes(cbl)) {
      textContent.title = 'Cement Bond Log Calcs Help';
      textContent.content = (
        <>
          <p>
            <strong>Purpose.</strong> Use this calculator to determine Travel
            Times for E1 peak of 3ft and 5ft waveforms
          </p>
          <p>
            <strong>Step 1.</strong> Choose Casing OD
          </p>
          <p>
            <strong>Step 2.</strong> Choose Casing Weight
          </p>
          <p>
            <strong>Step 3.</strong> Enter the OD of CBL tool transmitters and
            receivers
          </p>
          <p>
            <strong>Step 4.</strong> Choose Fluid Type
          </p>
          <p>
            <strong>Disclaimer.</strong> Please note that calculated values are
            approximate, since the actual Travel Time may vary depending on tool
            characteristics, ambient temperature and pressure
          </p>
        </>
      );
    } else if (pathname.includes(keyseat)) {
      textContent.title = 'Cable Stuck Depth (Keyseat) Help';
      textContent.content = (
        <>
          <p>
            <strong>Purpose.</strong> If you are unsure whther your cable{' '}
            {`(not logging tools)`} got stuck then this calculator to determine
            cable stuck depth
          </p>
          <p>
            <strong>Step 1.</strong> Choose Cable type or enter manually the
            Cable Stretch Coefficient
          </p>
          <p>
            <strong>Step 2.</strong> Set your winch tension to approximate cable
            + toolstring weight in the well fluid. Note your current depth and
            tension
          </p>
          <p>
            <strong>Step 3.</strong> Pull your winch safely and note your
            tension difference and depth change that you observed
          </p>
          <p>
            <strong>Step 4.</strong> Enter tension difference and depth change
            values the into corresponding boxes on the page
          </p>
          <p>
            <strong>Disclaimer.</strong> Please note that calculated values are
            linear calculations. The real cable stuck depth may differ from
            calculation. This difference may be caused by many factors, such as
            well curvature, temperature, wireline cable age, tension meter
            inaccuracy etc.
          </p>
        </>
      );
    } else if (pathname.includes(fluidVelocity)) {
      textContent.title = 'Fluid Velocity Help';
      textContent.content = (
        <>
          <p>
            <strong>Purpose.</strong> Figure out fluid velocity in certain
            casing diameters and pump rates. This is helpful if you want to
            determine what would be your wireline speed while pumping down.
          </p>
          <p>
            <strong>Step 1.</strong> Choose casing type you are running in
          </p>
          <p>
            <strong>Step 2.</strong> Set intended pumping rate
          </p>
        </>
      );
    }

    return textContent;
  };

  const { title, content } = renderText();

  return createPortal(
    <div aria-label="Help information window" className="modal">
      <header className="modal-header">
        <h4
          className="modal-title"
          id="modal-heading"
          aria-label="help item heading"
        >
          {title}
        </h4>
        <div className="pointer" onClick={() => onClose(false)}>
          <AiOutlineClose />
        </div>
      </header>
      <article className="modal-content" aria-labelledby="modal-heading">
        {content}
      </article>
    </div>,
    targetElement
  );
};
