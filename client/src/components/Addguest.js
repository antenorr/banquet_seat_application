import React from 'react';




const Addguest = (props) => {
    const { handleSubmit} = props;
    return (
        <div className="row">
            <form className="col s12" name="form_1" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="input-field col s12 m6">
                        <i className="material-icons prefix">account_circle</i>
                        <input id="icon_prefix" type="text" pattern="[A-Za-z]{2,10}" ref={node => (this.inputNode = node)} required/>
                        <span class="helper-text" data-error="at least two letters" data-success="cool!">Letters only</span>
                       <label htmlFor="icon_prefix">First Name</label>
                    </div>
                    <div className="input-field col s12 m6">
                        <i className="material-icons prefix">phone</i>
                        <input id="icon_telephone" type="tel" className="validate" name="userPhone" pattern="[0-9]{7}" className="validate"required/>
                        <span class="helper-text" data-error="7 numbers without spaces please" data-success="cool!">Numbers only - no spaces</span>
                        <label htmlFor="icon_telephone">Telephone</label>
                    </div>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action" >Submit
                    <i className="material-icons right">send</i>
                </button>
            </form>
        </div>
    )
}




export default Addguest;