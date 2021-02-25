const partitionLabels = S => {
  let lastTimeVisited = {}
  let end = 0
  let start = 0
  let partitions = []

  for(let i = 0; i < S.length; i++) {
    lastTimeVisited[s[i]] = i
  }

  for (let i = 0; i < S.length; i++) {
    // get the last time we see that chr S[i] = idx of chr in S
    end = Math.max(end, lastTimeVisited[S[i]]);
    if (i === end) {
      // if i and end are equal we get the sub str and push the len
      // and update start value
        partitions.push(i - start + 1);
        start = i + 1;
    }
  }
  return partitions;
}

const s = 'abccaddbeffe'
const result = partitionLabels(s)
result //


