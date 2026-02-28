import { createSignal } from 'solid-js'

export default function App() {
  const regex = //email validation regex
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  const [email, setEmail] = createSignal<string>("");
  const [loading, setLoading] = createSignal<boolean>(false);
  const [info, setError] = createSignal<string>("");
  const [status, setStatus] = createSignal< undefined | "error" | "success" | "loading">();

  const handleState = () => {};

  const handleSubmit = async (e: Event) => {
    e.preventDefault();

    if (!email().length) return setError("Provide an email");
    if (!regex.test(email())) return setError("Invalid email");

    setStatus("loading");

    const res = await fetch("hi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(email)
    })

    if (!res.ok){
      setStatus("error");
      return setError("Uh oh, something went wrong");
    }

    setStatus("success");
    
  }

  return (

    <div class="main">
      <div class="bg-grid"></div>
      <form class="container" onsubmit={handleSubmit}>
        <div class="container-top">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <path d="M160 96C124.7 96 96 124.7 96 160L96 224C96 259.3 124.7 288 160 288L480 288C515.3 288 544 259.3 544 224L544 160C544 124.7 515.3 96 480 96L160 96zM376 168C389.3 168 400 178.7 400 192C400 205.3 389.3 216 376 216C362.7 216 352 205.3 352 192C352 178.7 362.7 168 376 168zM432 192C432 178.7 442.7 168 456 168C469.3 168 480 178.7 480 192C480 205.3 469.3 216 456 216C442.7 216 432 205.3 432 192zM160 352C124.7 352 96 380.7 96 416L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 416C544 380.7 515.3 352 480 352L160 352zM376 424C389.3 424 400 434.7 400 448C400 461.3 389.3 472 376 472C362.7 472 352 461.3 352 448C352 434.7 362.7 424 376 424zM432 448C432 434.7 442.7 424 456 424C469.3 424 480 434.7 480 448C480 461.3 469.3 472 456 472C442.7 472 432 461.3 432 448z" />
            </svg>
          {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M553.5 351.9L526.1 351.9C523.5 351.9 521.5 353.9 521.5 356.5L521.5 388.5L484.9 388.5L484.9 210.2C484.9 207.6 482.9 205.6 480.3 205.6L452.9 205.6C450.3 205.6 448.3 207.6 448.3 210.2L448.3 242.2L411.7 242.2L411.7 210.2C411.7 207.6 409.7 205.6 407.1 205.6L379.7 205.6C377.1 205.6 375.1 207.6 375.1 210.2L375.1 242.2L338.5 242.2L338.5 210.2C338.5 204.2 330.5 205.6 326.8 205.6L326.8 167.6C335.1 165.6 343.9 164.2 352.5 164.2C363.4 164.2 373.4 168.5 383.9 168.5C388.5 168.5 411.6 167.4 411.6 160.5L411.6 100.5C411.6 97.9 409.6 95.9 407 95.9C401.9 95.9 391.9 100.2 383 100.2C373.3 100.2 362.1 95.9 350.4 95.9C342.4 95.9 334.4 97 326.7 98.8L326.7 93.9C332.1 91.3 335.8 85.6 335.8 79.6C335.8 58.9 304.4 58.8 304.4 79.6C304.4 85.6 308.1 91.3 313.5 93.9L313.5 205.6C309.8 205.6 301.8 204.2 301.8 210.2L301.8 242.2L265.2 242.2L265.2 210.2C265.2 207.6 263.2 205.6 260.6 205.6L233.2 205.6C230.6 205.6 228.6 207.6 228.6 210.2L228.6 242.2L192.3 242.2L192.3 210.2C192.3 207.6 190.3 205.6 187.7 205.6L160.3 205.6C157.7 205.6 155.7 207.6 155.7 210.2L155.7 388.5L119.1 388.5L119.1 356.5C119.1 353.9 117.1 351.9 114.5 351.9L87.1 351.9C84.5 351.9 82.5 353.9 82.5 356.5L82.5 576L265.4 576L265.4 480C265.4 407.4 375.1 407.4 375.1 480L375.1 576L558 576L558 356.5C558.1 353.9 556.1 351.9 553.5 351.9zM265.4 347.4C265.4 350 263.4 352 260.8 352L233.4 352C230.8 352 228.8 350 228.8 347.4L228.8 283.4C228.8 280.8 230.8 278.8 233.4 278.8L260.8 278.8C263.4 278.8 265.4 280.8 265.4 283.4L265.4 347.4zM411.8 347.4C411.8 350 409.8 352 407.2 352L379.8 352C377.2 352 375.2 350 375.2 347.4L375.2 283.4C375.2 280.8 377.2 278.8 379.8 278.8L407.2 278.8C409.8 278.8 411.8 280.8 411.8 283.4L411.8 347.4z" /></svg>*/}
          <p><span class="txt-muted">Kibi Host</span> is coming soon!</p>
        </div>
        <div class="container-body">
          <h2>Bringing you <span class="txt-i">reliable</span> and <span class="txt-i">smart</span> <span class="txt-acc">hosting</span>.</h2>
          <p class="txt-muted">Join the waitlist for early access.</p>
        </div>
        <div class="container-btm">
          <div class="input-container-wrapper">
            <div class="input-container">
              <input id="email" type="text" value={email()} onchange={(e) => setEmail(e.currentTarget.value)} placeholder="Your email" />
              <button class="primary-btn" type="submit">{status() == "loading" ? "Loading..." : "Join Waitlist"}</button>
            </div>
          </div>
          {info() && <small class="txt-err">{info()}</small>}
          <small class="txt-muted">© Kibi Host 2026 • <a class="txt-ul" href="/terms-of-service">Terms of Service</a><br/><a class="txt-ul" href="privacy-policy">Privacy Policy</a></small>
          {/* <label class="checkbox">
              <input type="checkbox" />
              <small class="txt-muted">I agree to the <a class="txt-ul" href="/terms-of-service">terms of service</a> and <a class="txt-ul" href="privacy-policy">privacy policy</a></small>
            </label> */}
        </div>
      </form>
    </div>
  )
}