function set_verdict_description(verdict) {
  let verdict_id = verdict.id
  let description = document.getElementById("verdict-description")

  description.innerHTML = verdicts[verdict_id][0]
  verdict.style.color = verdicts[verdict_id][1]
}

function clear_verdict_description(verdict) {
  let id = verdict.id
  verdict = document.getElementById(id)

  verdict.style.color = "#f1f1f1"
}

function set_packet_description(packet) {
  clear_packet_description()
  packet.classList.add("active")

  let packet_id = packet.id
  let code = document.getElementById("protocol-code")
  let inner_code = document.getElementById("protocol-inner-code")
  
  inner_code.innerHTML = "<pre>" + packets[packet_id] + "</pre>"
  code.style.height = (inner_code.clientHeight + 70) + "px"
  
}

function clear_packet_description() {
  Object.keys(packets).forEach(function(key) {
    document.getElementById(key).classList.remove("active")
  })
}

function animate(obj) {
  if (untitled_custom_objects[obj.id] != undefined) {
    obj.src = `/static/img/untitled/${untitled_custom_objects[obj.id]}`
    return
  }
  obj.src = `/static/img/untitled/${obj.id}.gif`
}

function stop_animation(obj) {
  obj.src = `/static/img/untitled/${obj.id}.png`
}

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
