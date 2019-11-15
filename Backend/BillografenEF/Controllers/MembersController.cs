using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using BillografenEF.Models;

namespace BillografenEF.Controllers
{

    
        [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
        public class MembersController : ApiController
        {

            private dbbillografenEntities db = new dbbillografenEntities();


            // GET: api/users
            public IQueryable<Member> Getusers()
            {
                return db.Member.Include(u => u.PassWord);
            }

            // GET: api/users/5
            [ResponseType(typeof(Member))]
            public IHttpActionResult Getuser(int id)
            {
                Member user = db.Member.Find(id);
                if (user == null)
                {
                    return NotFound();
                }

                return Ok(user);
            }

            // PUT: api/users/5
            [ResponseType(typeof(void))]
            public IHttpActionResult Putuser(int id, Member member)
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                if (id != member.MemberID)
                {
                    return BadRequest();
                }

                db.Entry(member).State = EntityState.Modified;

                try
                {
                    db.SaveChanges();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!userExists(id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }

                return StatusCode(HttpStatusCode.NoContent);
            }

            // POST: api/users
            [ResponseType(typeof(Member))]
            public IHttpActionResult Postuser(Member member)
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                db.Member.Add(member);
                db.SaveChanges();

                return CreatedAtRoute("DefaultApi", new { id = member.MemberID }, member);
            }

            // DELETE: api/users/5
            [ResponseType(typeof(Member))]
            public IHttpActionResult Deleteuser(int id)
            {
                Member member = db.Member.Find(id);
                if (member == null)
                {
                    return NotFound();
                }

                db.Member.Remove(member);
                db.SaveChanges();

                return Ok(member);
            }

            protected override void Dispose(bool disposing)
            {
                if (disposing)
                {
                    db.Dispose();
                }
                base.Dispose(disposing);
            }

            private bool userExists(int id)
            {
                return db.Member.Count(e => e.MemberID == id) > 0;
            }
        }
    }