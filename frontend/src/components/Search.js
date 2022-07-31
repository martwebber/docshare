import React from 'react';

export default function Search(){

      return(
        <div className="container">
            <form>
                <div>
                    <label htmlFor="search" className="form-label">Search Documents</label>
                    <input type="text" className="form-control" id="search" name="search" />
                </div>
            </form>
            <h3 className="mt-4">Search</h3>
            <div className="row">
                {/* TODO: POPULATE RESULTS */}
            </div>
        </div>
    )
}