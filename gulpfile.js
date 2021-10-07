/**
 layer 构建
*/

const gulp = require('gulp')
const uglify = require('gulp-uglify')
const minify = require('gulp-minify-css')
const rename = require('gulp-rename')
const header = require('gulp-header')
const del = require('del')
const pkg = require('./package.json')

const task = {
  layer() {
    gulp
      .src('./src/**/*.css')
      .pipe(
        minify({
          compatibility: 'ie7',
        })
      )
      .pipe(gulp.dest('./dist'))

    return gulp
      .src('./src/layer.js')
      .pipe(
        uglify({
          output: {
            ascii_only: true, //escape Unicode characters in strings and regexps
          },
        })
      )
      .pipe(
        header(
          '/*! <%= pkg.name %>-v<%= pkg.version %> <%= pkg.description %> <%= pkg.license %> License */\n ;',
          { pkg }
        )
      )
      .pipe(gulp.dest('./dist'))
  },
  mobile() {
    return gulp
      .src('./src/mobile/layer.js')
      .pipe(
        uglify({
          output: {
            ascii_only: true, //escape Unicode characters in strings and regexps
          },
        })
      )
      .pipe(
        header(
          '/*! <%= pkg.realname %> mobile-v<%= pkg.mobile %> <%= pkg.description %> <%= pkg.license %> License */\n ;',
          { pkg }
        )
      )
      .pipe(gulp.dest('./dist/mobile'))
  },
  other() {
    gulp.src('./src/**/*.{png,gif}').pipe(rename({})).pipe(gulp.dest('./dist'))
  },
}

gulp.task('clear', (cb) => {
  //清理
  return del(['./dist/*'], cb)
})
gulp.task('layer', task.minjs) //压缩PC版本
gulp.task('mobile', task.mincss) //压缩Mobile文件
gulp.task('other', task.other) //移动一些配件

//发行版本目录
const releaseDir = `./release/zip/layer-v${pkg.version}`
const release = `${releaseDir}/layer`

//打包发行版
gulp.task('clearZip', (cb) => {
  //清理
  return del([releaseDir], cb)
})
gulp.task(
  'r',
  gulp.series('clearZip', () => {
    gulp.src('./release/doc/**/*').pipe(gulp.dest(releaseDir))

    return gulp
      .src(['./dist/**/*', '!./dist/**/moon', '!./dist/**/moon/*'])
      .pipe(gulp.dest(release))
  })
)

//全部
gulp.task(
  'default',
  gulp.series('clear', (done) => {
    for (const subTask of Object.values(task)) {
      subTask()
    }
    done()
  })
)
