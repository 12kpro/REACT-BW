import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import JobCard from "./jobs/JobCard";
import BookmarksCard from "./jobs/BookmarksCard";
import { jobSearchKindUpdate } from "../redux/action/jobs";
const Jobs = () => {
  const items = useSelector((state) => state.job.searchResults);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(jobSearchKindUpdate("search"));
  }, []);
  const menuLink = [
    { icon: "bi-bookmark-fill", text: "Le mie offerte di lavoro" },
    { icon: "bi-bell-fill", text: "Avvisi offerte di lavoro" },
    { icon: "bi-journal-check", text: "Valutazioni delle competenze" },
    { icon: "bi-play-btn-fill", text: "Indicazioni per chi cerca" },
    { icon: "bi-gear-fill", text: "Impostazioni candidatura" }
  ];

  return (
    <div className="container">
      <div className="row">
        <div className=" col-3">
          <div className="card">
            <ul className="list-group list-group-flush">
              {menuLink.map((item, i) => (
                <li key={`jobs-menu-${i}`} className="list-group-item">
                  <Link to="/" className="text-decoration-none d-flex align-items-center">
                    <i className={`fs-4 me-2 bi ${item.icon}`}></i>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <h3>Seleziona tipo di ricerca</h3>
              <div className="btn-group w-100" role="group" aria-label="Basic radio toggle button group">
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio1"
                  autoComplete="off"
                  defaultChecked
                  onClick={() => dispatch(jobSearchKindUpdate("search"))}
                />
                <label className="btn btn-outline-primary" htmlFor="btnradio1">
                  Generale
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio2"
                  autoComplete="off"
                  onClick={() => dispatch(jobSearchKindUpdate("company"))}
                />
                <label className="btn btn-outline-primary" htmlFor="btnradio2">
                  Azienda
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio3"
                  autoComplete="off"
                  onClick={() => dispatch(jobSearchKindUpdate("category"))}
                />
                <label className="btn btn-outline-primary" htmlFor="btnradio3">
                  Categoria
                </label>
              </div>
            </div>
          </div>
          {!id ? (
            <>
              {items.map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
            </>
          ) : (
            <JobCard back details job={items[0]} />
          )}
        </div>
        <div className=" col-3">
          <BookmarksCard />
        </div>
      </div>
    </div>
  );
};
export default Jobs;
/*
          <div className="card">
            <div className="card-body">
              <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
                <label className="btn btn-outline-primary" htmlFor="btnradio1">
                  Generale
                </label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                <label className="btn btn-outline-primary" htmlFor="btnradio2">
                  Azienda
                </label>

                <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                <label className="btn btn-outline-primary" htmlFor="btnradio3">
                  Categoria
                </label>
              </div>
            </div>
          </div>
          */
